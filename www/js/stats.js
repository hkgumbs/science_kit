$( ".nav_back" ).click(function() {
    window.history.back();
});

$( ".nav_listen" ).click(function() {
	read('audio/stats.mp3', $(this));
});

$( "#button2_stats_home" ).click(function() {
	window.open("index.html","_self");
});
