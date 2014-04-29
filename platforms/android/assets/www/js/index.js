/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    isDeviceSupported: false,

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        // check if the current device is able to launch ARchitect Worlds
        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        app.wikitudePlugin.isDeviceSupported(app.onDeviceSupportedCallback, app.onDeviceNotSupportedCallback);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // A callback which gets called if the device is able to launch ARchitect Worlds
    onDeviceSupportedCallback: function() {
        app.isDeviceSupported = true;
    },

    // A callback which gets called if the device is not able to start ARchitect Worlds
    onDeviceNotSupportedCallback: function() {
        alert("not supported forreal");
        app.receivedEvent('Unable to launch ARchitect Worlds on this device');
    },

    onScreenCaptured: function (absoluteFilePath) {
        alert("snapshot stored at:\n" + absoluteFilePath);
    },

    onScreenCapturedError: function (errorMessage) {
        alert(errorMessage);
    },

    onUrlInvoke: function (url) {
        if (url.indexOf('captureScreen') > -1) {
            app.wikitudePlugin.captureScreen(true, null, app.onScreenCaptured, app.onScreenCapturedError);
        } else {
            alert(url + "not supported");
        }
    },

    loadARchitectWorld: function() {
        // app.wikitudePlugin.setOnUrlInvokeCallback(app.onUrlInvoke);
        // alert("in load...");

        if (app.isDeviceSupported) {
            app.wikitudePlugin.loadARchitectWorld("record.html");
        } else {
            alert("Device is not supported");
        }
    }
};

$( "#button1_experiments" ).click(function() {
    $( "#dialog_index_experiments" ).fadeIn( "slow" );
});

$( "#button1_experiments_cancel" ).click(function() {
    $( "#dialog_index_experiments" ).fadeOut( "slow" );
});

$( "#button2_garden" ).click(function() {
    window.open("garden.html","_self");
});

$( ".icon_select_plant" ).click(function() {
    $( "#dialog_index_experiments" ).fadeOut( "slow" );
    $( "#dialog_index_record" ).fadeIn( "slow" );
})

$( "#button1_record_yes" ).click(function() {
    app.loadARchitectWorld();
    // window.open("record.html","_self");
});

$( "#button2_record_no" ).click(function() {
    window.open("stats.html","_self");
});
