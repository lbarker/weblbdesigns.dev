$(function(){
    
    var ua = navigator.userAgent.toLowerCase(),
    isAndroid = ua.indexOf("android") > -1;
    
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false && !isAndroid) 
    {
        
        /*---------------------------------------*/
        /*  INTRO SECTION
        /*---------------------------------------*/
        $('#intro > .intro-body .intro-content').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceIn').css('opacity', 1);}
        });

        /*---------------------------------------*/
        /*  TIMELINE
        /*---------------------------------------*/
        $('ul.timeline > li > .timeline-panel').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInLeft').css('opacity', 1);}
        });

        $('ul.timeline > li.timeline-inverted > .timeline-panel').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInRight').css('opacity', 1);}
        });
        
    }

    /*---------------------------------------*/
    /*  GROWING BAR CHART
    /*---------------------------------------*/
    
    var skills = function (){
        $('.bar-chart .bar-chart-item').each(function(){
            var newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            
            if (jQuery.browser.mobile === false && !isAndroid){
                $(this).width(0).animate({
                    width: newWidth
                }, 1500);
            }
            else{
                $(this).css('width', newWidth);
            }
        }); 
    };
    
    if (jQuery.browser.mobile === false && !isAndroid){
        $('.bar-chart').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {
                $(this).css('opacity', 1);
                skills();

            }
        });
    }
    else{
        skills();
    }

});