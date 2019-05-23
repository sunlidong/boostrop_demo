(function($){

  "use strict";

  $(window).load(function() {

    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');

    $(window).trigger("resize");
    initOwlCarousel();
    initMasonry();
    masonry();  

    setTimeout(function() {
      $.stellar('refresh');
    }, 1000);

  });


  $(window).resize(function(){

    container_full_height_init();
    $.stellar('refresh');
    megaMenu();
    megaMenuWide();
    
    var windowWidth = $(window).width();
    if (windowWidth <= 974) {
      $('.dropdown-toggle').attr('data-toggle', 'dropdown');
      $('.navigation').removeClass("sticky");
      $('.local-scroll.desktop-offset-0').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
      $('.local-scroll.mobile-offset-0').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});
      (function($){
        $(".container-full-height").height($(window).height() - $(".navbar-header").height());
      })(jQuery);
    }
    if (windowWidth > 974) {
      $('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
      $('.dropdown').removeClass('open');
      $('.local-scroll.mobile-offset-0').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
      $('.local-scroll.desktop-offset-0').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});
    }

    /* Mobile Navigation 
    -------------------------------------------------------*/
    if (windowWidth > 974 & $('html').hasClass('mobile')) {
      $('.navbar-nav > li.dropdown > a, .dropdown-submenu > a').on('click', function(e){ e.preventDefault(); });
    }

    if (windowWidth <= 974 & $('html').hasClass('mobile')) {
      $('.navbar-nav > li.dropdown > a, .dropdown-submenu > a').unbind('click');
    }

    /* Mobile Menu Resize
    -------------------------------------------------------*/
    $(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
    
  });


  /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function(){

    var windowWidth = $(window).width();    
    if ($(window).scrollTop() > 190 & windowWidth > 974){
      $('.navigation').addClass("sticky");
      $('.logo-wrap').addClass("shrink");
    } else {
      $('.navigation').removeClass("sticky");
      $('.logo-wrap').removeClass("shrink");
    }

    if ($(window).scrollTop() > 200 & windowWidth > 974){
      $('.navigation').addClass("offset");
    } else {
      $('.navigation').removeClass("offset");
    }

    if ($(window).scrollTop() > 500 & windowWidth > 974){
      $('.navigation').addClass("scrolling");
    } else {
      $('.navigation').removeClass("scrolling");
    }


    if ($(window).scrollTop() > 190 ){
      $('.navbar-fixed-top').addClass("sticky");
    } else {
      $('.navbar-fixed-top').removeClass("sticky");
    }

    if ($(window).scrollTop() ){
      $(".sidenav").removeClass('opened');
      $('.main-wrapper').removeClass('sidenav-opened');
      $('#nav-icon').removeClass('open');
    } else {
      return false;
    }

  });

  /* Onepage Nav
  -------------------------------------------------------*/
  $('#onepage-nav li > a').on('click',function() {
    $(".navbar-collapse").collapse('hide');
  });


  // Smooth Scroll Navigation
  $('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
  $('.local-scroll-no-offset').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});

  /* Full screen Navigation
  -------------------------------------------------------*/
  $('#nav-icon, .overlay-menu').on("click", function(){
    $('#nav-icon, #overlay').toggleClass('open');

    $(function(){
   
    var delay = 0

      $('.overlay-menu > ul > li').each(function(){
        $(this).css({animationDelay: delay+'s'})
        delay += 0.1
      })
 
    })

  });


  /* Bootstrap Dropdown Navigation
  -------------------------------------------------------*/
  "use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.$element=a(b),this.$main=this.$element.closest(".dropdown, .dropup, .btn-group"),this.$menu=this.$element.parent(),this.$drop=this.$menu.parent().parent(),this.$menus=this.$menu.siblings(".dropdown-submenu");var d=this.$menu.find("> .dropdown-menu > "+c);this.$submenus=d.filter(".dropdown-submenu"),this.$items=d.not(".dropdown-submenu"),this.init()}var c=":not(.disabled, .divider, .dropdown-header)";return b.prototype={init:function(){this.$element.on({"click.bs.dropdown":this.click.bind(this),keydown:this.keydown.bind(this)}),this.$menu.on("hide.bs.submenu",this.hide.bind(this)),this.$items.on("keydown",this.item_keydown.bind(this)),this.$menu.nextAll(c+":first:not(.dropdown-submenu)").children("a").on("keydown",this.next_keydown.bind(this))},click:function(a){a.stopPropagation(),this.toggle()},toggle:function(){this.$menu.hasClass("open")?this.close():(this.$menu.addClass("open"),this.$menus.trigger("hide.bs.submenu"))},hide:function(a){a.stopPropagation(),this.close()},close:function(){this.$menu.removeClass("open"),this.$submenus.trigger("hide.bs.submenu")},keydown:function(a){if(/^(32|38|40)$/.test(a.keyCode)&&a.preventDefault(),/^(13|32)$/.test(a.keyCode))this.toggle();else if(/^(27|38|40)$/.test(a.keyCode))if(a.stopPropagation(),27==a.keyCode)this.$menu.hasClass("open")?this.close():(this.$menus.trigger("hide.bs.submenu"),this.$drop.removeClass("open").children("a").trigger("focus"));else{var b=this.$main.find("li:not(.disabled):visible > a"),c=b.index(a.target);if(38==a.keyCode&&0!==c)c--;else{if(40!=a.keyCode||c===b.length-1)return;c++}b.eq(c).trigger("focus")}},item_keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.$element.trigger("focus"))},next_keydown:function(a){if(38==a.keyCode){a.preventDefault(),a.stopPropagation();var b=this.$drop.find("li:not(.disabled):visible > a"),c=b.index(a.target);b.eq(c-1).trigger("focus")}}},a.fn.submenupicker=function(c){var d=this instanceof a?this:a(c);return d.each(function(){var c=a.data(this,"bs.submenu");c||(c=new b(this),a.data(this,"bs.submenu",c))})}});
  $('.dropdown-submenu > i').submenupicker();


  /* Search
  -------------------------------------------------------*/
  $('.search-trigger').on('click',function(e){
    e.preventDefault();
    $('.search-wrap').animate({opacity: 'toggle'},500);
    $('.nav-search, #search-close').addClass("open");
    $('.search-wrap .form-control').focus();

  });

  $('.search-close').on('click',function(e){
    e.preventDefault();
    $('.search-wrap').animate({opacity: 'toggle'},500);
    $('.nav-search, #search-close').removeClass("open");

  });

  function closeSearch(){
    $('.search-wrap').fadeOut(200);
    $('.nav-search, #search-close').removeClass("open");
  }
    
  $(document.body).on('click',function(e) {
    closeSearch();
  });

  $(".search-wrap, .search-trigger").on('click',function(e) {
    e.stopPropagation();
  });



  /* Sidenav
  -------------------------------------------------------*/

  $(".nav-icon-trigger, #sidenav-close").on('click', function(e) {
    e.preventDefault();
    $(".sidenav").toggleClass('opened');
    $('.main-wrapper').toggleClass('sidenav-opened');
    $('#nav-icon').removeClass('open');
  });

  $("#sidenav-close").on('click', function() {
    $('#nav-icon').removeClass('open');
  });

  $(document.body).on('click',function(e) {
    $(".sidenav").removeClass('opened');
    $('.main-wrapper').removeClass('sidenav-opened');
    $('#nav-icon').removeClass('open');
  });

  $(".nav-icon-trigger, #sidenav-close").on('click',function(e) {
    e.stopPropagation();
  });



  /* Mobile Detect
  -------------------------------------------------------*/
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
     $("html").addClass("mobile");
     $('.dropdown-toggle').attr('data-toggle', 'dropdown');
  }
  else {
    $("html").removeClass("mobile");
  }

  /* IE Detect
  -------------------------------------------------------*/
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }


  /* Mega Menu
  -------------------------------------------------------*/
  function megaMenu(){

    $('.megamenu').each(function () {
      $(this).css('width', $('.container').width());
      var offset = $(this).closest('.dropdown').offset();
      offset = offset.left;
      var containerOffset = $(window).width() - $('.container').outerWidth();
      containerOffset = containerOffset /2;
      offset = offset - containerOffset - 15;
      $(this).css('left', -offset);
    });

  }

  function megaMenuWide(){

    $('.megamenu-wide').each(function () {
      $(this).css('width', $('.container-fluid').width());
      var offset = $(this).closest('.dropdown').offset();
      offset = offset.left;
      var containerOffset = $(window).width() - $('.container-fluid').outerWidth();
      containerOffset = containerOffset /2;
      offset = offset - containerOffset - 50;
      $(this).css('left', -offset);
    });

  }


  /* Typing Text
  -------------------------------------------------------*/
  $(function(){
    $(".typing-text").typed({
      strings: ["Landing Page", "Startup Site", "Onepage"],
      typeSpeed: 30,
      backDelay: 1500,
      loop: true
    });
  });


  /* Scroll reveal
  -------------------------------------------------------*/
  window.sr = ScrollReveal();

  sr.reveal('.animated', {
    reset: false,
    duration: 700,
    mobile: false,
    delay: 300,
    scale: 1,
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 }
  });

  sr.reveal('.animated-left', {
    reset: false,
    duration: 700,
    mobile: false,
    delay: 300,
    scale: 1,
    origin: 'left',
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 }
  });

  sr.reveal('.animated-right', {
    reset: false,
    duration: 700,
    mobile: false,
    delay: 300,
    scale: 1,
    origin: 'right',
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 }
  });

  sr.reveal('.animated-top', {
    reset: false,
    duration: 700,
    mobile: false,
    delay: 300,
    scale: 1,
    origin: 'top',
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 }
  });


  /* Counters
  -------------------------------------------------------*/
  $('.statistic').appear(function() {
    $('.timer').countTo({
      speed: 4000,
      refreshInterval: 60,
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      }
    });
  });


  /* Owl Carousel
  -------------------------------------------------------*/

  function initOwlCarousel(){
    (function($){
      "use strict";

      /* Featured Works
      -------------------------------------------------------*/
      $("#owl-featured-works").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        stopOnHover: true,
        autoPlay: 3000,
        itemsCustom: [
          [0, 1],      
          [450, 1],
          [700, 2],
          [1200, 3]
        ],
      })


      /* Hero Slider
      -------------------------------------------------------*/
      $("#owl-hero").owlCarousel({
        navigation: true,
        navigationText: ["<i class='pe-7s-angle-left'></i>", "<i class='pe-7s-angle-right'></i>"],
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true,
        addClassActive: true
      })


      /* Testimonials
      -------------------------------------------------------*/

      $("#owl-testimonials").owlCarousel({      
        navigation: false,
        navigationText: ["<i class='pe-7s-angle-left'></i>", "<i class='pe-7s-angle-right'></i>"],
        autoHeight: true,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true    
      })


      /* Team Slider
      -------------------------------------------------------*/

      $("#owl-team").owlCarousel({      
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],      
          [450, 2],
          [700, 3],
          [900, 4],
          [1200, 5]
        ],      
      })


      /* Partners Logo
      -------------------------------------------------------*/

      $("#owl-partners").owlCarousel({
        autoPlay: 3000,
        pagination: false,
        itemsCustom: [
          [0, 2],
          [370, 3],
          [550, 4],
          [700, 5],
          [1000, 6]
        ],
      })


      /* Single Image
      -------------------------------------------------------*/

      $("#owl-single").owlCarousel({     
        navigation: false,
        pagination: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='pe-7s-angle-left'></i>", "<i class='pe-7s-angle-right'></i>"]     
      })


    })(jQuery);
  };


  /* FlexSlider
  -------------------------------------------------------*/

  $('#flexslider').flexslider({
    animation: "slide",
    directionNav: true,
    touch: true,
    slideshow: false,
    prevText: ["<i class='pe-7s-angle-left'></i>"],
    nextText: ["<i class='pe-7s-angle-right'></i>"]
  });


  /* Flickity Slider
  -------------------------------------------------------*/

  var offsetSlider = $('#offset-slider').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    percentPosition: true,
    imagesLoaded: true,
    lazyLoad: 1,
    pageDots: false,
    selectedAttraction : 0.1,
    friction: 0.6,
    rightToLeft: false,
    arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
  });

  offsetSlider.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
    if ( typeof cellIndex == 'number' ) {
      offsetSlider.flickity( 'selectCell', cellIndex );
    }
  });


  // Single item
  $('#flickity-single').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    percentPosition: true,
    imagesLoaded: true,
    lazyLoad: 1,
    pageDots: false,
    selectedAttraction : 0.1,
    friction: 0.6,
    rightToLeft: false,
    arrowShape: 'M 25,50 L 60,85 L 65,80 L 35,50  L 65,20 L 60,15 Z'
  })

  var $gallery = $('#offset-slider, #flickity-single');


  // magnific popup bug fix
  var popupItems = $.map( $gallery.find('.gallery-cell a'), function( link ) {
    return {
      src: link.href,
      type: $(link).attr('data-popup-type') || 'image'
    }
  });

  $gallery.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    $.magnificPopup.open({
      items: popupItems,
      gallery: {
        enabled: true
      },
      closeBtnInside: false,
      callbacks: {
        open: function () {
          $.magnificPopup.instance.goTo( cellIndex );
        }
      }
    });
  });

  // prevent links from opening
  $gallery.on( 'click', 'a', function(event) {
    event.preventDefault();
  });


  /* Progress Bars
  -------------------------------------------------------*/
  var $section = $('#animated-skills').appear(function() {

    var bar = $('.progress-bar');
    var bar_width = $(this);
  
    function loadDaBars() { 
         
      $(bar).each(function(){
        bar_width = $(this).attr('aria-valuenow');
        $(this).width(bar_width + '%');
      });
    }
    loadDaBars();
  });


  /* Pie Charts
  -------------------------------------------------------*/
  $('.chart').appear(function() {

    $(this).easyPieChart({

      animate:{
      duration:1500,
      enabled:true
      },
      scaleColor:false,
      trackColor:'#f5f5f5',
      lineWidth: 3,
      size: 170,
      lineCap: 'square',

      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
      chart.update(Math.random()*200-100);
    });
  });

  
  /* Accordion
  -------------------------------------------------------*/
  function toggleChevron(e) {
    $(e.target)
      .prev('.panel-heading')
      .find("a")
      .toggleClass('plus minus');
  }
  $('#accordion').on('hide.bs.collapse', toggleChevron);
  $('#accordion').on('show.bs.collapse', toggleChevron);


  /* Toggle
  -------------------------------------------------------*/
  var allToggles = $(".toggle > .panel-content").hide();
  
  $(".toggle > .acc-panel > a").on('click', function(){

    if ($(this).hasClass("active")) {
      $(this).parent().next().slideUp("easeOutExpo");
      $(this).removeClass("active");
    }

    else {
      $(this).parent().next(".panel-content");
      $(this).addClass("active");
      $(this).parent().next().slideDown("easeOutExpo");
    }
    
    return false;       
  });


  /* Lightbox popup
  -------------------------------------------------------*/

  $('.lightbox-gallery').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      titleSrc: 'title',
      verticalFit: true
    }
  });


  $(".lightbox-video").magnificPopup({
    closeBtnInside: false
  });


  /* Tooltip
  -------------------------------------------------------*/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /* Portfolio Isotope
  -------------------------------------------------------*/

  var $portfolio = $('#portfolio-container');
  $portfolio.imagesLoaded( function() {     
    $portfolio.isotope({
      isOriginLeft: true,
      stagger: 30
    });
    $portfolio.isotope();

  });

  // Isotope filter
  $('.portfolio-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({ filter: filterValue });

    $('.portfolio-filter a').removeClass('active');
    $(this).closest('a').addClass('active');

  });


  /* Masonry
  -------------------------------------------------------*/

  function masonry() {
    var $container = $('#masonry');
    $container.imagesLoaded( function() {
      $container.isotope({
        itemSelector: '.masonry-item',
        layoutMode: 'masonry'
      });
    });
  }

  function initMasonry(){

    var $masonry = $('#masonry-grid');
    $masonry.imagesLoaded( function() {
      $masonry.isotope({
        itemSelector: '.masonry-item',
        layoutMode: 'masonry',
        percentPosition: true,
        resizable: false,
        isResizeBound: false,
        masonry: { columnWidth: '.masonry-item.quarter' }
      });
    });

    $masonry.isotope();
  }


  /* Parallax
  -------------------------------------------------------*/

  $.stellar({
    horizontalScrolling: false,
    hideDistantElements: false
  });


  /* FitVIds
  -------------------------------------------------------*/
  $(".video-wrap").fitVids();


  /* Contact Form
  -------------------------------------------------------*/

  var submitContact = $('#submit-message'),
    message = $('#msg');

  submitContact.on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    
    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function(data) {

        if(data.info !== 'error'){
          $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });


})(jQuery);


/* Scroll to Top
-------------------------------------------------------*/

(function() {
  "use strict";

  var docElem = document.documentElement,
    didScroll = false,
    changeHeaderOn = 550;
    document.querySelector( '#back-to-top' );
  function init() {
    window.addEventListener( 'scroll', function() {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 50 );
      }
    }, false );
  }
  
})();

$(window).scroll(function(event){
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("#back-to-top").addClass("show");
  } else {
    $("#back-to-top").removeClass("show");
  }

});

$('a[href="#top"]').on('click',function(){
  $('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
  return false;
});


/* Full Height Container
-------------------------------------------------------*/

function container_full_height_init(){
  (function($){
    $(".container-full-height").height($(window).height());
  })(jQuery);
}


/* Style Switcher
-------------------------------------------------------*/

// $(".main-wrapper").after('<div id="customizer" class="s-close"><span class="corner"><i class="fa fa-cog"></i></span><div id="options" class="text-center"><a href="http://themeforest.net/item/afela-flexible-multipurpose-html5-template/14581951?ref=DeoThemes" class="btn btn-md btn-color mt-40 mb-40">Buy Syros Now</a><h6 class="uppercase">Select Demo</h6><ul class="demo-list clearfix"><li><a href="index.html" target="_blank"><img src="img/demos/multipage.jpg" alt=""></a></li><li><a href="index-onepage.html" target="_blank"><img src="img/demos/onepage.jpg" alt=""></a></li><li><a href="index-business.html" target="_blank"><img src="img/demos/business.jpg" alt=""></a></li><li><a href="index-agency.html" target="_blank"><img src="img/demos/agency.jpg" alt=""></a></li><li><a href="index-landing.html" target="_blank"><img src="img/demos/landing.jpg" alt=""></a></li><li><a href="index-shop.html" target="_blank"><img src="img/demos/shop.jpg" alt=""></a></li></ul></div></div>');

// $(".corner").on('click',function (){
//   $("#customizer").toggleClass("s-open");
// });