/* MAIN.JS */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/*THIS IS MAIN JS FILE THAT CONTAINS CUSTOM JS SCRIPTS AND INITIALIZATION USED IN THIS TEMPLATE */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* 	THEME NAME 		: NAZ RESPONSIVE SIMPLE ONE PAGE
* 	THEME URL		: http://www.naz1.naztemplate.com/
* 	AUTHOR			: NAZ
* 	AUTHOR URL		: http://www.naztemplate.com/
* 	VERSION			: 1.0
* 	COPYRIGHT		: (C) 2014
*/
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     //Detecting viewpot dimension
     var vW = $(window).width();
     var vH = $(window).height();


    //Vertical Centering of natural content spcific elements (non-images)
     $(function ($) {
              /*if your element is an image then please use $(window).load() instead tha above function wrap, because we want the coding to take
              effect when the image is loaded. */
              
              //get the width of the parent
              var parent_height = $('.vertical-center').parent().height();
              var image_height = $('.vertical-center').height();
              
              var top_margin = (parent_height - image_height)/2;
              
              //center it
              $('.vertical-center').css( 'padding-top' , top_margin);
              //uncomment the following if ithe element to be centered is an image
              $('.vertical-center-img').css( 'margin-top' , top_margin);


       });


    //Waypoints

    $(window).load(function(){
      $('#about').waypoint(function (direction) {
                
              if (direction === 'down') {
                
                $('.navigation-section').addClass("header-nav-fixed");
                
              } 
              else {
                 $('.navigation-section').removeClass("header-nav-fixed");
                 
                
           }

    }, { offset: 100 });



  });
  



     // quote owl

     
        $(".quote-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:true,
          navigation: false,
          pagination: false,
          items : 1,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3]
        });
        


     // Service owl

    
        $(".services-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:false,
          navigation: false,
          pagination: true,
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
        });
      
  

    //works Engine

      $('.works-gallery #Grid').mixitup({
        transitionSpeed : 800
      });

     $(window).load(function(){
      var work_img_height =  $('.works-gallery .works-item a.more_info img').height() ;
      $('.works-gallery .works-item a.more_info .hover-hidden-content').css('height' , work_img_height + 3);


      $(".works-gallery .works-item a.more_info").hover(function(){
      $(this).children('.hover-hidden-content').addClass("hover-hidden-slide");
      },function(){
      $(this).children('.hover-hidden-content').removeClass("hover-hidden-slide");
      });

      var locationUrl = $(location).attr('href');
      var targetLocation = locationUrl.split('#');
      var targetId = '#'+targetLocation[1];
      $('.navigation-container li a[href='+targetId+']').trigger('click');


     });

     

      //Team Carousel

     
        $(".team-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : false,
          singleItem:false,
          navigation: true,
          navigationText : ["<",">"],
          pagination: false,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
        });
      


      // Clients owl

     
        $(".clients-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:true,
          navigation: false,
          pagination: true,
          items : 1,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
        });
      

     
        $(".clients-logo-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:false,
          navigation: false,
          pagination: false,
          items : 6,
          itemsDesktop : [1199,6],
          itemsDesktopSmall : [979,4],
          itemsTablet:[800,3],
          itemsTabletSmall: [600,2],
          itemsMobile: [360,2],
        });
       

     // blog slider

     
        $(".blog-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:false,
          navigation: true,
          pagination: false,
          stopOnHover: true,
          navigationText : ["<",">"],
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
          itemsTablet:[800,1],
          itemsTabletSmall: [600,1],
          itemsMobile: [360,1],
        });
     


     //blog flex slider

     
      $('.blog-slider').flexslider({
        slideshow: true,
        controlNav: false, 
        pauseOnHover: true,
        slideshowSpeed: 3000,
        directionNav: true,
        prevText: "<",
        nextText: ">",
        animation: "slide"
      });
    

	// blog page slider

     
        $(".blog-page-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:true,
          navigation: true,
          pagination: true,
          stopOnHover: true,
          navigationText : ["<",">"],
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1]
        });


        // single-project page slider

     
        $(".single-project-page-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:true,
          navigation: true,
          pagination: true,
          stopOnHover: true,
          navigationText : ["<",">"],
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1]
        });
       
	//Box slider
	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true
	});


    // Navigation activator

    $('.navigation-container ul li a').click(function(){
      $('.navigation-container ul li a').removeClass('nav-active');
      $(this).addClass('nav-active');
    });

    //Nav highlight
   
    $('.highlight').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.navigation-container ul li > a').removeClass('nav-active');
        $('#'+sectionId+'-linker').addClass('nav-active');
    });


    var thanks_padd = $('.thanks-wrapper').height();
    var thanks_result = (vH - thanks_padd) / 2;
    $('.thanks-wrapper').css({
      'padding-top':thanks_result,
      'padding-bottom':thanks_result
    });




      });
      // $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends


