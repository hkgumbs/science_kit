$( ".nav_back" ).click(function() {
    window.history.back();
});

$( ".nav_listen" ).click(function() {
	read('audio/graph.mp3', $(this));
});

$( "#button_graph_continue" ).click(function() {
	$( "#dialog_water" ).fadeIn( "slow" );
	$( ".nav_listen" ).css("opacity", 1.0);
});

$( "#button_water_continue" ).click(function() {
	window.open("stats.html","_self");
});

var lineChartData = {
	labels : ["4/26","4/27","4/28","4/29","Yesterday","Today"],
	datasets : [
		{
			fillColor : "rgba(44,201,144,0.5)",
			strokeColor : "rgba(44,201,144,1)",
			pointColor : "rgba(44,201,144,1)",
			pointStrokeColor : "#fff",
			data : [3.5, 3.8, 3.9, 4.0, 4.1, 4.3]
		}
	]
}

var options = {
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 20,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : .25,
	//Number - The scale starting value
	scaleStartValue : 0,

	scaleFontColor : "#000"
}

var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData, options);
