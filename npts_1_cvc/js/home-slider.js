

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
     
     $('.home-owl .item > div').css('height' , vH);
     $(window).load(function(){
      var home_owl_ht = $('.home-owl .home-owl-content').height();
      var home_padding = (vH - home_owl_ht)/2;
      $('.home-owl .home-owl-content').css({
          'padding-top':home_padding,
          'padding-bottom':home_padding
        });

     });


     //Home Carousel

    
        $(".home-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:true,
          pagination: false,
          transitionStyle : "fade",
          items : 1,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3]
        });
      

     $('.sub-heading').each(function(){

        var text_width = $(this).find('span').width();
        var text_height = $(this).find('span').height();
        var heading_width = $(this).width();
        var elmt_width = ((heading_width - text_width)/2)-20;
        var elmt_top = text_height/2;

        var heading_text = $(this).find('span').html();

        var left_elmt = '<div class="sub-heading-custom-element" style="width:'+elmt_width+'px; position:absolute; left:0px; top:'+elmt_top+'px;"></div>'; 
        var right_elmt = '<div class="sub-heading-custom-element" style="width:'+elmt_width+'px; position:absolute; right:0px; top:'+elmt_top+'px;"></div>'; 
        $(this).html(left_elmt + '<span>' + heading_text + '</span>' + right_elmt);

     });




      });
      // $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

