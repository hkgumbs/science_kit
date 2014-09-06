var senses = 0;

$( ".nav_back" ).click(function() {
    window.history.back();
});

$( ".nav_listen" ).click(function() {

	read('audio/qod.mp3', $(this));
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

function showValue(newValue) {
	document.getElementById("p_answer").innerHTML=newValue;
}