//SMOOTH TOP DOWN SCROLLING





if( !device.tablet() && !device.mobile() ) {

            //Desktop Navigation Scroll
            $(document).ready(function() {

                $(".scroll-link").click(function() {
                    var ScrollOffset = 50;
                    //alert(ScrollOffset);
                    $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
                    }, {
                        duration: 500,
                        easing: "linear"
                    });
                    return false;
                });

            });
                        
        } else {
            
            //Desktop Navigation Scroll
            $(document).ready(function() {

                $(".scroll-link").click(function() {
                    var ScrollOffset = 50;
                    //alert(ScrollOffset);
                    $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
                    }, {
                        duration: 1500,
                        easing: "linear"
                    });
                    return false;
                });

            });
           
        }
		
		
		
