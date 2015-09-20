$(function(){
        
    /*---------------------------------------*/
    /*  INTRO SECTION
    /*---------------------------------------*/
    $('#intro > .intro-body .intro-content').css('opacity', 0).one('inview', function(isInView){
        if (isInView) {$(this).addClass('animated bounceIn').css('opacity', 1);}
    });
    
    
    /*---------------------------------------*/
    /*  OUR MAIN SKILLS SECTION
    /*---------------------------------------*/
    $('#our-main-skills .bar-chart-text').css('opacity', 0).one('inview', function(isInView){
        if (isInView) {$(this).addClass('animated flipInX delayp1').css('opacity', 1);}
    });
    

   

    
   
    /*---------------------------------------*/
    /*  CONTACT US SECTION
    /*---------------------------------------*/
    $('#contact-us .contact-us-form').css('opacity', 0).one('inview', function(isInView){
        if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
    });
    
    $('#contact-us .social-icon-text').css('opacity', 0).one('inview', function(isInView){
        if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
    });

    
   
    /*---------------------------------------*/
    /*  FOOTER
    /*---------------------------------------*/
    $('#footer .footer-column').each(function(i){            
        var element = $(this),
        itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
        element.css('opacity', 0).one('inview', function(isInView) {
            if (isInView){
                setTimeout(function(){
                    element.addClass('animated fadeInUp').css('opacity', 1);
                } , itemsDelay * (i * 2));
            }
        });
    });
});