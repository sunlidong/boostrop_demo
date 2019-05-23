
$(window).bind('load', function () {

if( !device.tablet() && !device.mobile() ) {

            /* if non-mobile device is detected*/ 
              // Parallax Init
              $('.parallax').each(function() {
                    $(this).parallax('10%', 0.5, true);
                });
                        
        } else {
            
            /* if mobile device is detected*/ 
            $('.slide').addClass('parallax-off');
        }

});
