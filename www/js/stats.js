$( ".nav_back" ).click(function() {
    window.open("index.html","_self");
});


$( "#button1_stats_water" ).click(function() {
    $( "#button1_stats_water" ).fadeOut( "slow" );
    $( "#p_water" ).fadeOut( "slow" );
    $( "#p_details" ).fadeIn( "slow" );
});