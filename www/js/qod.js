var senses = 0;

$( ".nav_back" ).click(function() {
    window.history.back();
});

$( ".nav_listen" ).click(function() {

	read([ 'Question of the Day',
		'How many leaves does the plant have?',
		'Which sense did you use?' ], $(this));
});

$( ".img_senses" ).click(function() {
	if ($(this).css("opacity") != 0.5) {
		senses = senses + 1;
		$(this).css("opacity", 0.5 );
	} else {
		senses = senses - 1;
		$(this).css("opacity", 1.0 );
	}

    if (senses > 0) {
    	$( "#button_wrapper_qod" ).fadeIn( "slow" );
    } else {
    	$( "#button_wrapper_qod" ).fadeOut( "slow" );
    }
});

$( "#button_qod_continue" ).click(function() {
    window.open("graph.html","_self");
});

function read(blurbs, button) {
	if (button.css("opacity") != 0.5) {
		button.css("opacity", 0.5 );
		var time = 0;
		var inc = 2500;
		$.each(blurbs, function(index, value){
			time = inc * index;
			var msg = new SpeechSynthesisUtterance(value);
			setTimeout(function(){window.speechSynthesis.speak(msg);},time);
		});
		setTimeout(function(){button.css("opacity", 1.0);},time + inc);
	}
}

function showValue(newValue) {
	document.getElementById("p_answer").innerHTML=newValue;
}