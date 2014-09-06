var newTitle = "Set the Height";
$( "#draggable" ).draggable({
    containment: 'body',
});

$( ".nav_back" ).click(function() {
    window.history.back();
});

$( ".nav_listen" ).click(function() {
	if ($("h1").text() != newTitle) {
	    read("audio/record_1.mp3", $(this));
	} else {
		read("audio/record_2.mp3", $(this));
	}
});

$( "#button1_dialog_ok" ).click(function() {
    $( "#dialog_record_instructions" ).fadeOut( "slow" ); 
    $( ".img_placeholder" ).fadeIn( "slow" );
    $( "#button_wrapper_record1" ).fadeIn( "slow" );
});

$( "#button_record_capture" ).click(function() {
	$( "#button_wrapper_record1" ).fadeOut( "slow" );
    $( "#button_wrapper_record2" ).fadeIn( "slow" );
    $( "#draggable" ).fadeIn( "slow" );
    $( "h1" ).text(newTitle);
});

$( "#button_record_continue" ).click(function() {
    window.open("qod.html","_self");
});

var World = {
	loaded: false,

	init: function initFn() {
		/* Disable all sensors in "IR-only" Worlds to save performance. If the property is set to true, any geo-related components (such as GeoObjects and ActionRanges) are active. If the property is set to false, any geo-related components will not be visible on the screen, and triggers will not fire.*/
		AR.context.services.sensors = false;
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		// Initialize Tracker
		// Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
		// e.g. replace "pageOne" used for creating the AR.Trackeable2DOBject below, with the name of one of your new target images.
		this.tracker = new AR.Tracker("assets/stickers.wtc", {
			onLoaded: this.worldLoaded
		});

		// Create overlay for page one
		var imgOne = new AR.ImageResource("assets/group1.jpg");
		var overlayOne = new AR.ImageDrawable(imgOne, 1, {
			offsetX: -0.15,
			offsetY: 0
		});
		var pageOne = new AR.Trackable2DObject(this.tracker, "pageOne", {
			drawables: {
				cam: overlayOne
			}
		});
	},

	worldLoaded: function worldLoadedFn() {
		var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		var cssDivRight = " style='display: table-cell;vertical-align: middle; text-align: left;'";
		document.getElementById('loadingMessage').innerHTML =
		"<div" + cssDivLeft + ">Scan Target &#35;1 (surfer):</div>" +
			"<div" + cssDivRight + "><img src='img/group1.jpg'></img></div>";

		// Remove Scan target message after 10 sec.
		setTimeout(function() {var e =document.getElementById('loadingMessage'); e.parentElement.removeChild(e);}, 10000);
	}
};

// World.init();