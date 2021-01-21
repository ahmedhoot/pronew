$(function(){
	'use strict';
	// Slider Height
	var winH = $(window).height(),
	upperH = $('.upper-bar').innerHeight(),
	navH = $('.navbar').innerHeight();

	$('.slider , .carousel-item').height(winH - (upperH+navH));
 
 // featured
 $('.Featured ul li').on('click' , function(){
 	$(this).addClass('active').siblings().removeClass('active');
 if ($(this).data('class')==='all'){
 	$('.shuffle-image .col-sm').css('opacity' , 1);
 }
 else{
 	$('.shuffle-image .col-sm').css('opacity' , '.08');
 	$($(this).data('class')).parent().css('opacity' , 1);

 }
 });

 //Testional slider
 (function autoslider(){
 	$('.carousel-inner .active').each(function(){
 		if (!$(this).is(':last-child')){
 			$(this).delay(3000).fadeout(1000,function(){
 			$(this).removeClass('active').next().addClass('active').fadeIn();
 			autoslider();
 				
 			});
 		} 

 	});

 }());


});
