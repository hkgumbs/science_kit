$( ".nav_back" ).click(function() {
    window.history.back();
});

$( ".nav_listen" ).click(function() {
	read([ 'Plants and vegetables start from seeds.',
		'A seed is made up of three parts; embryo, endosperm and seed coat.',
		'The embryo is a miniature plant in a suspended state of development.',
		'It contains its own food supply, which is the endosperm.',
		'The hard outer covering is the seed coat.',
		'It protects the seed from the elements.',
		'Once water enters the seed, the germination process begins.',
		'Bean plants begin with seeds.',
		'There are a variety of bean types and a seed for each kind of bean.'], $(this));
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