/********************************************
* Preloder Start
********************************************/

setTimeout( function(){ 
	$(".loder").fadeOut(); // stop after 5s anyway
  }  , 5000 );

$(window).on('load', function () {
	$('.loder').fadeOut(); // stop as soon as document loaded

}); // Preloader End

$(document).ready(function () {
/********************************************
* Menu - Class active change
********************************************/
	$("section#portfolio .nav-item a").click(function () {
		$("section#portfolio .nav-item").removeClass("active");
		$(this).parent().addClass("active") ;
	});
/********************************************
* Small Device Expand Hide/Show Method
********************************************/
	$(".navbar-collapse > ul > li  a").click(function () {
		$(".navbar-collapse").removeClass("show")
	});


});




$(window).scroll(function () {
	
/********************************************
* Snike navbar - Color change - To Top
********************************************/
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


/********************************************
* Slick Slider
********************************************/
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

/********************************************
* Counter Up 
********************************************/
	$(".counter_up h5").counterUp({
		delay: 10,
		time: 1000
	})

/********************************************
* Scroll To Plugin
********************************************/
	$.scrollIt({
		topOffset: -63
	})
});


$(window).scroll(function(){
	
/********************************************
* Progress Bar - Custom
********************************************/
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

$(document).ready(function () {
/********************************************
*  Magnific Pupup
********************************************/
$('.filter-portfolio').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});




$('.filter-portfolio').filterizr();


/********************************************
* WOW.js Plugin
********************************************/
	wow = new WOW({
		mobile: false
	})
	wow.init();

/********************************************
* Lazy Image Load
********************************************/
	$(".lazy").unveil();


/********************************************
* Validate Jquery 
********************************************/
$("form").validate();
$("#commentForm").validate();
 });