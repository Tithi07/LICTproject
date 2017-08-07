$(window).on('load', function() { 
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow':'visible'});
})




$(document).ready(() => {
    
    
    function logingPageFunc(){
        
        $(".clock").animate({
        opacity:1
        },1000);
        $(".welcome").animate({
        opacity:1
        },1000);
        $(".tabs").animate({
        opacity:1,
        bottom:0
        },1000);
        
    };  


    setTimeout(logingPageFunc,10);


    $(".logoutbtn").click(() => {
        window.location.href="index.html";
        return false;
    });

   

});


$(document).ready(() => {
    
    
     

   

});
//----------------------------//




