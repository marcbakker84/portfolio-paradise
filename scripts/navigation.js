$(document).ready(function() {

    
    $('#fullpage').fullpage({
        //anchors:['home1','work1','about1','contact1'],
        animateAnchor:true,
        scrollingSpeed: 1000,
        navigation: true,
        slidesNavigation: true,
        continuousHorizontal: false,
        controlArrows: false,
        loopBottom: true,
        afterRender: function () {
        autoSlider = setInterval(function () {
            $.fn.fullpage.moveSlideRight();
        }, 3000);
        }
        
    });
    

    
//    $('.inner-container-case').BlackAndWhite({
//        hoverEffect: false,
//        webwerkerPath: false,
//        infertHoverEffect: false,
//        intensity: 1,   
//    });
    
    var calculateWidth = function(){
        var x = $("#about .inner-container-60").width();
        var y = $(".triangle-wrapper").width();
        var z = $(window).width()
        $("#contact .inner-container-60").width(x-y-30);
        $("#contact .inner-container-40").width($(window).width()-(x-y)-30);
        $("#contact .triangle-wrapper").width(y);
    }
    
    calculateWidth();
    
    $(window).resize(calculateWidth);
    
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
            $(".navigation-container").toggle("slide", {direction:'right'});
            $(".navigation-container").css("display","table");
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
            $(".navigation-container").toggle("slide", {direction:'right'});
            closed = true;
        }
    });
        
    

});


