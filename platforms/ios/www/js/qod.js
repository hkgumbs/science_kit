$( ".nav_back" ).click(function() {
    window.open("index.html","_self");
});

$( ".img_senses" ).click(function() {
    $( "#button_wrapper_qod" ).fadeIn( "slow" );
});

$( "#button1_qod_continue" ).click(function() {
    window.open("stats.html","_self");
});

function showValue(newValue)
{
	document.getElementById("p_answer").innerHTML=newValue;
}