function read(audio, button) {
	if (button.css("opacity") != 0.5) {
		button.css("opacity", 0.5 );
		var inc = 2500;

        // var alert_yo = function() {
        //     alert('yo');
        // }

        // var media = new Media(audio, alert_yo, alert_yo, alert_yo);
        // media.play();

        // var audioElement = document.createElement('audio');
        // audioElement.setAttribute('src', audio);
        // audioElement.setAttribute('autoplay', 'autoplay');
        // $(audioElement).on("ended", function() {
        //     button.css("opacity", 1.0);
        // });

        var my_media = new Media(audio,
            // success callback
             function () { console.log("playAudio():Audio Success"); },
            // error callback
             function (err) { console.log("playAudio():Audio Error: " + err); }
        );
        
        // Play audio
        my_media.play();

	}
}
