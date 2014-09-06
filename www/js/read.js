function read(audio, button) {
	if (button.css("opacity") != 0.5) {
		button.css("opacity", 0.5 );
		var inc = 2500;
        var url = 'https://raw.githubusercontent.com/hkgumbs/science_kit/master/www/' + audio;

        // var alert_yo = function() {
        //     alert('yo');
        // }

        // var media = new Media(audio, alert_yo, alert_yo, alert_yo);
        // media.play();

        // var audioElement = document.createElement('audio');
        // audioElement.setAttribute('src', audio);
        // audioElement.setAttribute('autoplay', 'autoplay');
        // $(audioElement).on("ended", function() {
        //     
        // });

        var callback = function () {
            button.css("opacity", 1.0);
        };
        var my_media = new Media(url, callback, callback);
        
        // Play audio
        my_media.play();

	}
}
