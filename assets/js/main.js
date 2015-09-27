jQuery(document).ready(function(event){
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

            //close nav it is open
            $('body').removeClass('navigation-is-open');

            $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
        });
    };
    
    pageScroll();
   

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

    //open/close lateral navigation
    $('.fire-nav').on('click', function(event){
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

    var isAnimating = false,
    firstLoad = false;
    //trigger smooth transition from the actual page to the new one 
    $('body').on('click', '[data-type="page-transition"]', function(event){
        event.preventDefault();
        //detect which page has been selected
        var newPage = $(this).attr('href');
        //if the page is not already being animated - trigger animation
        if( !isAnimating ) changePage(newPage, true);
        firstLoad = true;
    });

    //detect the 'popstate' event - e.g. user clicking the back button
    $(window).on('popstate', function() {
        if( firstLoad ) {
            /*
            Safari emits a popstate event on page load - check if firstLoad is true before animating
            if it's false - the page has just been loaded 
            */
            var newPageArray = location.pathname.split('/'),
            //this is the url of the page to be loaded 
            newPage = newPageArray[newPageArray.length - 1];
            if( !isAnimating ) changePage(newPage, false);
        }
    firstLoad = true;
    });

    function changePage(url, bool) {
        isAnimating = true;
        // trigger page animation
        $('body').addClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            loadNewContent(url, bool);
            $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        //if browser doesn't support CSS transitions
        if( !transitionsSupported() ) loadNewContent(url, bool);
    }

    function loadNewContent(url, bool) {
        url = ('' == url) ? 'index.html' : url;
        var newSection = 'cd-'+url.replace('.html', '');
        var section = $('<div class="cd-main-content '+newSection+'"></div>');
       
        section.load(url+' .cd-main-content > *', function(event){
        // load new content and replace <main> content with the new one
            $('main').html(section);


            //if browser doesn't support CSS transitions - dont wait for the end of transitions
            var delay = ( transitionsSupported() ) ? 1200 : 0;
            setTimeout(function(){
                //wait for the end of the transition on the loading bar before revealing the new content
                ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');

                $('body').removeClass('page-is-changing');
                
                $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    isAnimating = false;
                    $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                });

                if( !transitionsSupported() ) isAnimating = false;
            }, delay);
          
            if(url!=window.location && bool){
                //add the new page to the window.history
                //if the new page was triggered by a 'popstate' event, don't add it
                window.history.pushState({path: url},'',url);
            }

            //close menu 
            $('body').removeClass('navigation-is-open');
            loadNewNav(url, bool);
        });
    }

    function loadNewNav(url, bool) {
        url = ('' == url) ? 'index.html' : url;
        var newNav = 'cd-nav'+url.replace('.html', '');
        var nav = $('<div class="cd-primary-nav '+newNav+'"></div>');
       
        nav.load(url+' .cd-primary-nav > *', function(event){
        // load new content and replace <main> content with the new one
            $('nav').html(nav);
    
        });
    }

 
    function transitionsSupported() {
        return $('html').hasClass('csstransitions');
    }
    
});