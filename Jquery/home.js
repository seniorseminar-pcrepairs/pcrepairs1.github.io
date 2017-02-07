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
    $(".top2").slideToggle();
});
    
$('.boxed1').mouseenter(function() {
       $(this).animate({
           height: '+=50px'
       });
   });
$('.boxed1').mouseleave(function() {
       $(this).animate({
           height: '-=50px'
       }); 
   });
    $('.boxed2').mouseenter(function() {
       $(this).animate({
           height: '+=50px'
       });
   });
$('.boxed2').mouseleave(function() {
       $(this).animate({
           height: '-=50px'
       }); 
   });
    $('.boxed3').mouseenter(function() {
       $(this).animate({
           height: '+=50px'
       });
   });
$('.boxed3').mouseleave(function() {
       $(this).animate({
           height: '-=50px'
       }); 
   });
    
    
$('a').hover(
function(){
    $(this).addClass('toplihover');
},
    function(){
        $(this).removeClass('toplihover');
    }
);
    
    
});