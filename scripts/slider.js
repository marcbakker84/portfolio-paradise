$(document).ready(function() {

$('.inner-container-case').backgroundBlur({
        imageURL : '/assets/images/bg.jpg',
        blurAmount : 50,
        imageClass : 'case-background'
    });
    
$(".read-more-btn").click(function(){
    $(".case-info").fadeOut("slow");
    $(".read-more-btn").fadeOut("slow");
    $(".case-content-wrapper").toggle("slide");
    $(".case-content-wrapper .fa-times-circle").delay(500).fadeIn("slow");
})

$(".case-content-wrapper .fa-times-circle").click(function(){
    $(".case-content-wrapper").toggle("slide");
    $(".case-info").fadeIn("slow");
    $(".read-more-btn").fadeIn("slow");
    $(".case-content-wrapper .fa-times-circle").fadeOut("fast");
})
    
});

var sliderTemplate = 
             
 '<div id="work" class="outer-container section">'
+'       <div class="border">'
+'        <div class="inner-container-case slide">'
+'            <div class="case-box">'
+'                 <div class="case-info">'
+'                     <h3 class="type">Corporate website</h3>'
+'                     <h2 class="client">Client name</h2>'
+'                 </div>'
+'                <div class="read-more-btn">'
+'                    <div class="stick"></div>'
+'                    <span class="button-text">read more</span>'
+'                </div>'
+'            </div>'
+'        </div>'
+'         <div class="inner-container-case slide">'
+'             <div class="case-box">'
+'                 <div class="case-info">'
+'                     <h3 class="type">Corporate website</h3>'
+'                     <h2 class="client">Client name</h2>'
+'                 </div>'
+'                 <div class="case-content-wrapper">'
+'                    <i class="fa fa-times-circle"></i>'
+'                    <div class="case-content-left">'
+'                        <h2 class="case-title">Client Name</h2>'
+'                        <p class="case-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. <br><br>Ut in nulla enim.Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis.</p>'
+ '                       <a class="case-link" href="http://www.google.com">see project</a>'
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
+ '       </div>'
+ '       </div>'
+ '   </div>'