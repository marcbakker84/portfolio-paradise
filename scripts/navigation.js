$(document).ready(function() {
    
    $('#fullpage').fullpage({
        scrollingSpeed: 1000,
        navigation: true,
        slidesNavigation: true,
        continuousHorizontal: true,
        controlArrows: false,
    });
    
    $('.inner-container-case').backgroundBlur({
        imageURL : '/assets/images/bg.jpg',
        blurAmount : 50,
        imageClass : 'case-background'
    });
    
//    $('.inner-container-case').BlackAndWhite({
//        hoverEffect: false,
//        webwerkerPath: false,
//        infertHoverEffect: false,
//        intensity: 1,   
//    });
    
//    var calculateWidth = function(){
//        var x = $("#about .inner-container-60").width();
//        var y = $(".triangle-wrapper").width();
//        var z = $(window).width()
//        $("#contact .inner-container-60").width(x-y);
//        $("#contact .inner-container-40").width($(window).width()-(x-y));
//        $("#contact .triangle-wrapper").width(y);
//    }
//    
//    calculateWidth
//    $(window).resize(calculateWidth)
    
    var x = $("#about .inner-container-60").width();
    var y = $(".triangle-wrapper").width();
    var z = $(window).width()
    $("#contact .inner-container-60").width(x-y-30);
    $("#contact .inner-container-40").width($(window).width()-(x-y)-30);
    $("#contact .triangle-wrapper").width(y);
    
    var closed = true 
    
    $(".navigation-button").click(function(){
        if(closed == true ){
            
            $(".navigation-button").animate({
                backgroundColor: "#ffffff",
            });
            
            $(".fa-angle-left").animate({
                color: "#000000",
            })
             
            $('.fa-angle-left').transition({ 
                rotate: '180deg',
                duration: 250,
            }); 
            
            $(".navigation-container").css(
                "display","table"
            );
            
            closed = false;
            
        } else {
            $(".navigation-button").animate({
                backgroundColor: "#000000",
            });
            
            $(".fa-angle-left").animate({
                color: "#ffffff",
            });
            
            $('.fa-angle-left').transition({ 
                rotate: '0deg',
                duration: 250,
            });
            
            $(".navigation-container").css(
                "display","none"
            );
            
            closed = true;
            
        }
    });
        
    

});


