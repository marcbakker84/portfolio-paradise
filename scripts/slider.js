

$(document).ready(function(){
    var sliderTemplate =         
     '         <div class="inner-container-case slide fp-slide fp-table">'
    +'             <div class="case-overlay">'
    +'             <div class="case-box vert-center">'
    +'                 <div class="case-info">'
    +'                     <h3 class="type"></h3>'
    +'                     <h2 class="client"></h2>'
    +'                 </div>'
    +'                 <div class="case-content-wrapper">'
    +'                    <i class="fa fa-times-circle"></i>'
    +'                    <div class="case-content-left">'
    +'                        <h2 class="case-title"></h2>'
    +'                        <p class="case-text"></p>'
    + '                       <a class="case-link" href="">see project</a>'
    + '                   </div>'
    + '                   <div class="case-content-right">'
    + '                       <div class="case-triangle-wrapper">'
    + '                           <div class="case-triangle-up"></div>'
    + '                       </div>'
    + '                   </div>'
    + '               </div>'
    + '                <div class="read-more-btn">'
    + '                   <div class="stick"></div>'
    + '                   <span class="button-text">read more</span>'
    + '               </div>'
    + '            </div>'
    + '            </div>'
    + '            </div>'
    + '       </div>'
    ;

    for(i=0;i<projects.length;i++) {
        $("#work .border").append(sliderTemplate);
        $(".inner-container-case:nth-child("+(i+1)+") .client").text(projects[i].title);
        $(".inner-container-case:nth-child("+(i+1)+") .type").text(projects[i].type);
        $(".inner-container-case:nth-child("+(i+1)+") .case-title").text(projects[i].title);
        $(".inner-container-case:nth-child("+(i+1)+") .case-text").text(projects[i].text);
        $(".inner-container-case:nth-child("+(i+1)+") .case-link").attr("href", projects[i].link);
        $(".inner-container-case:nth-child("+(i+1)+")").css("background-image", "url("+projects[i].image+")");
        $(".inner-container-case:nth-child("+(i+1)+") .case-box").css("background-image", "url("+projects[i].image+")");
        }

//    $('.inner-container-case').backgroundBlur({
//            imageURL : '/assets/images/bg.jpg',
//            blurAmount : 50,
//            imageClass : 'case-background'
//        });

    $(".read-more-btn").click(function(){
        slideIndex = 1 + $(".read-more-btn").index(this);
    })



    $(".read-more-btn").click(function(){
        slideIndex = 1 + $(".read-more-btn").index(this);
        $(".inner-container-case:nth-child("+slideIndex+") .case-info").fadeOut("slow");
        $(".inner-container-case:nth-child("+slideIndex+") .read-more-btn").fadeOut("slow");
        $(".inner-container-case:nth-child("+slideIndex+") .case-content-wrapper").toggle("slide");
        $(".inner-container-case:nth-child("+slideIndex+") .case-content-wrapper .fa-times-circle").delay(500).fadeIn("slow");
        clearInterval(autoSlider);
    })

    $(".case-content-wrapper .fa-times-circle").click(function(){
        $(".inner-container-case:nth-child("+slideIndex+") .case-content-wrapper").toggle("slide");
        $(".inner-container-case:nth-child("+slideIndex+") .case-info").fadeIn("slow");
        $(".inner-container-case:nth-child("+slideIndex+") .read-more-btn").fadeIn("slow");
        $(".inner-container-case:nth-child("+slideIndex+") .case-content-wrapper .fa-times-circle").fadeOut("fast");
        autoSlider = setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 3000);
    });
});


