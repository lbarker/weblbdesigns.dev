$(function(){
    
    var ua = navigator.userAgent.toLowerCase(),
    isAndroid = ua.indexOf("android") > -1;
                
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false && !isAndroid) 
    {
        /*---------------------------------------*/
        /*  BAR CHART
        /*---------------------------------------*/
        $('.bar-chart').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated flipInX delayp1').css('opacity', 1);}
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
});