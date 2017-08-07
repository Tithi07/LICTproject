$(window).on('load', function() { 
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow':'visible'});
})




$(document).ready(() => {
    
    
    function logingPageFunc(){
        $(".welcome").animate({
        left:0
        },1000);

        $(".inputform").animate({
        bottom:0
        },1000);
        $(".clock").animate({
        opacity:1
        },1000);
        $(".doctor").animate({
        left:0
        },1000);

        
    };  


    setTimeout(logingPageFunc,10);


    $(".css3button").click(() => {
        
        window.location.href="admin.html";
        return false;
    });

   

});


$(document).ready(() => {
    
    
     $(".logoutbtn").click(() => {
        window.location.href="index.html";
        return false;
    });

   

});
//----------------------------//




