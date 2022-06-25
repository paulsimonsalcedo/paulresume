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
 	let Allsection = sec.length; //All section
 	while(Allsection-- && window.scrollY < sec[Allsection].offsetTop){}

 		item.forEach(eachItem => eachItem.classList.remove("active"));
 	    item[Allsection].classList.add("active");
 	
 }


 let backtotop = document.getElementById("back-to-top");
 window.addEventListener("scroll", BackAtTop);
 BackAtTop();
 function BackAtTop(){

 	backtotop.classList.toggle("showBacktoTop", window.scrollY > 60);
 	backtotop.style.transition = ".5s";
 }

 let bgDark = document.querySelector(".ScreenPop");
 let heading = document.querySelector(".Screen-header");
 let logoSpan = document.querySelectorAll(".text");

 window.addEventListener('load', function(){
		setTimeout(function(){
			logoSpan.forEach(function(span, idx){ // transition in. span and idx is parameter name in forEach.
					setTimeout(function(){
						span.classList.add('active');
					},(idx + 1) * 400) //idx is the number of span * (400 milliseconds)
				})
			setTimeout(function() {
				logoSpan.forEach(function(span, idx){ 
					setTimeout(function() { // after 400 milliseconds > 1000 milliseconds next
							span.classList.remove('active');
							span.classList.add("fadeOut");
					}, (idx + 1) * 300); //900 is yung pagitan ng dalawang idx sa pag out
					
				})
			}, 1500);	// time kung kelan mag out

			setTimeout(function(){
				bgDark.classList.add("bgDarkActive");
			}, 2500); // 2500 is time ng pagout ng background
		
		});

 })