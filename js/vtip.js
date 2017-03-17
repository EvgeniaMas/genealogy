

$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".togglebox").hide(); 

	//Slide up and down on hover
	$(".user_questions").click(function(){
		$(this).next(".togglebox").slideToggle("slow");

	});


	$(".minus_close").click(function(){
		$(".togglebox").hide(1000);

	

	});

});




