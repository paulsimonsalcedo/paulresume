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
	        scrollTop: $("#techstack").offset().top},
	        'slow' > 2);
	      
	         
	});
	$("#click_scroll5").click(function() {
	    	$('html,body').animate({
	        scrollTop: $("#RecentProject").offset().top},
	        'slow' > 2);
	       
	  
	});

/****** IN JQUERY *****
 * $(this).toggleClass(ClassName);
 * *******************/


 let item = document.querySelectorAll(".links");
 let sec = document.querySelectorAll("section");


  window.addEventListener("scroll", activeMenu);
  activeMenu();

 function activeMenu(){
 	let len = sec.length;
 	while(len-- && window.scrollY + 97 < sec[len].offsetTop){}
 		item.forEach(ltx => ltx.classList.remove("active"));
 		item[len].classList.add("active");
 }

 let backtotop = document.getElementById("back-to-top");
 window.addEventListener("scroll", BackAtTop);
 BackAtTop();
 function BackAtTop(){

 	backtotop.classList.toggle("showBacktoTop", window.scrollY > 60);
 	backtotop.style.transition = ".5s";
 }