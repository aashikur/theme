// Load background Image
$('.header-image').css('background-image', 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(../img/header-img.jpg)');

// Loader strt
$(window).on('load', function () {
	$('.loder').fadeOut(); // stop as soon as document loaded

});
setTimeout( function(){ 
	$(".loder").fadeOut(); // stop after 5s anyway
  }  , 5000 );
// Loader End

$(document).ready(function () {
	$("section#portfolio .nav-item a").click(function () {
		$("section#portfolio .nav-item").removeClass("active");
		$(this).parent().addClass("active")
	})
});
$(document).ready(function () {
	$(".navbar-collapse > ul > li  a").click(function () {
		$(".navbar-collapse").removeClass("show")
	})
});
$(window).scroll(function () {
	var a = $(window).scrollTop();
	if (a >= 100) {
		$("header .nav-menu").addClass("scroll-change");
		$("#nav").addClass("s-color")
	} else {
		$("header .nav-menu").removeClass("scroll-change");
		$("#nav").removeClass("s-color")
	}
	if (a >= 800) {
		$("#to_top").fadeIn()
	} else {
		$("#to_top").hide(10)
	}
});
$(document).ready(function () {
	$(".snake").snakeify({
		speed: 400
	})
});
$(document).ready(function () {
	var a = $(".portfolio-gallery-wrapper").isotope({
		itemSelector: ".portfolio-gallery",
		layoutMode: "fitRows"
	});
	$("#portfolio .filter-nav li").click(function () {
		var b = $(this).attr("date-name");
		a.isotope({
			filter: b
		})
	})
});
$(document).ready(function () {
	$(document).ready(function () {
		$(".ourclints-wrapper").slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			dots: false,
			infinite: true,
			responsive: [{
				breakpoint: 1124,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		})
	})
});
$(document).ready(function () {
	$(".counter_up h5").counterUp({
		delay: 10,
		time: 1000
	})
});
$(function () {
	$.scrollIt({
		topOffset: -63
	})
});


$(window).scroll(function(){
	$(".progress-bar").each(function(){

		// take value from bottom screen of windows // take Value of Bottom of Windows // take Indivisual value of Progress Bar
		var bottom_of_object = $(this).offset().top + $(this).outerHeight(); 
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		var myVal = $(this).attr("data-value");

		if(bottom_of_object < bottom_of_window) {
			$(this).css("width" , myVal + "%");
		}

	});
});



$('.snake').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	image: {
		verticalFit: false
	}
});


$(document).ready(function () {
	wow = new WOW({
		mobile: false
	})
	wow.init();
});