
/* Navbar script */
$(window).scroll(function(){

	if($(window).scrollTop() > 30) {
		  $('.navbar').addClass('navbar-bg');
	  } 
		else{
			$('.navbar').removeClass('navbar-bg');
		}
		
	});

if($(window).scrollTop() > 30){
	$('.navbar').addClass('navbar-bg');
}

/* clients logo */
$(".clients-logo").owlCarousel({ 
    autoplay: true,
    loop: true,
    nav: false,
    margin: 15,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:6,
            loop:true,
        }
    }    
});

/* skillbars */
jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },1000);
});

/* Scroll script */
$(function() {
    $('a.scrollto').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 57
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* all-member */
$(".all-member").owlCarousel({ 
    autoplay: true,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
            loop:true,
            nav: true,
        }
    }    
});
