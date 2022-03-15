window.addEventListener("scroll", function(){

			var header = document.querySelector("header");
			header.classList.toggle("sticky", window.scrollY > 0);

			//FOR ABOUT PAGE

			var reveals = document.querySelector(".banner_content");
			reveals.classList.toggle("active", window.scrollY > 30)


		});	
	
	$("#click_scroll").click(function() {
	    	$('html,body').animate({
	        scrollTop: $("#home").offset().top},
	        'slow' > 2);
	});
	$("#click_scroll2").click(function() {
	    	$('html,body').animate({
	        scrollTop: $("#abt").offset().top},
	        'slow' > 2);
	});
	$("#click_scroll3").click(function() {
	    	$('html,body').animate({
	        scrollTop: $("#resume").offset().top},
	        'slow' > 2);
	});
		$("#click_scroll4").click(function() {
	    	$('html,body').animate({
	        scrollTop: $("#game").offset().top},
	        'slow' > 2);
	});


