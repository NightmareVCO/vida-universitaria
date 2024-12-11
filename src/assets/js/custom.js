(function($) {
	'use strict';

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	}); 
	
	// Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		};
	});

	// Others Option For Responsive JS 
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});


	// Preloader JS
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});

	// Search Popup JS
	$('.close-btn').on('click',function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click',function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	// Home Slider
	var swiper = new Swiper('.home-slider-container', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		animateOut: 'zoomOut',
		animateIn: 'zoomOut',
		autoplay: true,
		effect: 'fade',
		notification: 'false', 
		smartSpeed: 8000,
		navigation: {
			nextEl: '.home-slider-container .swiper-btn-next',
			prevEl: '.home-slider-container .swiper-btn-prev',
		},
	});  

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	}); 

	//Events-slider
    $('.events-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        thumbs: false,
        autoplay: true,
        smartSpeed: 8000,
        autoplayHoverPause: true,
		navText: [
            '<i class="fa-solid fa-arrow-left"></i>', 
            '<i class="fa-solid fa-arrow-right"></i>',  
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:5,
            },
                
        }
    });

	
	// Preloader
	$(window).on('load', function() {
		$('.preloader-area').fadeOut();
	});


	// Popup JS
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
	
			fixedContentPos: false
		});
	}); 



	// Go to Top
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
	});
	// Click Event
		$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
  
 
})(jQuery);

