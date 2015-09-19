$(function() {

    /*---------------------------------------*/
    /*  PAGE LOADER
    /*---------------------------------------*/
    $(window).load(function(){
        $('#page-loader').fadeOut('fast');
    });
    
    
    /*---------------------------------------*/
    /*  JQUERY FOR PAGE SCROLLING FEATURE
    /*  requires jQuery Easing plugin
    /*---------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e){
            e.preventDefault();

            var $anchor = $(this);

            var offset = $('body').attr('data-offset');
            
            $('body').data('offset', 1);
            offset = $('body').data('offset');

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
        });
    };
    
    pageScroll();
    
    $(window).smartresize(function(){
        pageScroll();
    });


    //menu
      var isLateralNavAnimating = false;
      
      //open/close lateral navigation
      $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();
        //stop if nav animation is running 
        if( !isLateralNavAnimating ) {
          if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
          
          $('body').toggleClass('navigation-is-open');
          $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            //animation is over
            isLateralNavAnimating = false;
          });
        }
      });
    
});