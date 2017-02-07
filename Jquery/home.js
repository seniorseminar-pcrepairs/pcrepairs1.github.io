'use strict';


$(function() {

var currentslide = 1;
    
var $slider = $('#slider')
var $slidecontainer = $slider.find('.sliders');
 var $sliders = $slidecontainer.find('.slide');
    
  setInterval(function() {
    $slidecontainer.animate({'margin-left':'-=720px'},2000, function() {
        currentslide++;
        if(currentslide === $sliders.length){
            currentslide = 1;
            $slidecontainer.css('margin-left',0);
        }
    });
  
  },6000); 
    
$("#hamburger").on('click', function() {
    $(".top").slideToggle();
});
    

$(".boxed1").mouseenter(
function(){
    $(this).css('background-color','#f8c323');
}
);
$(".boxed1").mouseleave(
function(){
    $(this).css('background-color','#303030');
}
);
$(".boxed2").mouseenter(
function(){
    $(this).css('background-color','#f8c323');
}
);
$(".boxed2").mouseleave(
function(){
    $(this).css('background-color','#303030');
}
);
$(".boxed3").mouseenter(
function(){
    $(this).css('background-color','#f8c323');
}
);
$(".boxed3").mouseleave(
function(){
    $(this).css('background-color','#303030');
}
);
    
    
$(".aboxed").hover(
function(){
    $(this).addClass('aboxed2');
},
    function(){
        $(this).removeClass('aboxed2');
    }
);
    
    
});