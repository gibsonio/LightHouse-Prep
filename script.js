$(document).ready(function() {
	console.log("Script is loaded!");


	$("#1stbutton").click(function(){
$("#1st").toggle('slow');
	});
	$("#2ndbutton").click(function(){
$("#2nd").toggle('slow');
	});
	$("#3rdbutton").click(function(){
$("#3rd").toggle('slow');
	});


	$("#1stpurchase").click(function(){
		$("#box1").toggleClass("highlight");
	});

	$("#2ndpurchase").click(function(){
		$("#box2").toggleClass("highlight");
	});

	$("#3rdpurchase").click(function(){
		$("#box3").toggleClass("highlight");
	});


	$("#1stdirection").click(function(){
		$("#box4").toggleClass("highlight");
	});

	$("#2nddirection").click(function(){
		$("#box5").toggleClass("highlight");
	});

	$("#3rddirection").click(function(){
		$("#box6").toggleClass("highlight");
	});

	$("#4thdirection").click(function(){
		$("#box7").toggleClass("highlight");
	});

	$("#5thdirection").click(function(){
		$("#box8").toggleClass("highlight");
	});

});
	
	
	

