$(function(){
    
    
    
    var skills = function (){
        $('.bar-chart .bar-chart-item').each(function(){
            var newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
        
            $(this).width(0).animate({
                width: newWidth
            }, 1500);
       
        }); 
    };

    skills();
        
});