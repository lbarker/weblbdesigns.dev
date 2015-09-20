$(function(){
    
    
        /*---------------------------------------*/
        /*  TIMELINE
        /*---------------------------------------*/
        $('ul.timeline > li > .timeline-panel').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInLeft').css('opacity', 1);}
        });

        $('ul.timeline > li.timeline-inverted > .timeline-panel').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInRight').css('opacity', 1);}
        });
});