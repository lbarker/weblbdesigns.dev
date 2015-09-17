$(function(){
    $(window).load(function(){
        var $container = $('.popup-portfolio'); 
        
        var isotopePortfolio = function(filter){
            $container.isotope({ 
                filter: filter, 
                animationOptions: { 
                    duration: 750, 
                    easing: 'linear', 
                    queue: false
                },
                masonry: {
                    isFitWidth: true,
                    isResizable: true,
                    gutter: 15
                }
            }); 
        };
        
        isotopePortfolio('*');
        
        $('.filter-portfolio a').click(function(e){ 
            e.preventDefault();
            
            $('.filter-portfolio li').removeClass('active');
            
            $('.filter-portfolio a').removeClass('disabled');
            
            $(this).parent('li').addClass('active');
            
            $(this).addClass('disabled');
            
            var selector = $(this).attr('data-filter'); 
            
            isotopePortfolio(selector);
        }); 
    });
    
    $('.popup-portfolio').magnificPopup({
        delegate: 'a',
        type: 'ajax',
        modal: true,
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        alignTop: true,
        gallery: {
            enabled: true,
            preload: [0,2],
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir% mfp-custom"></button>',
            tPrev: 'Previous Project',
            tNext: 'Next Project'
        }
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});