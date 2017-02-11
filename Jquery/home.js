'use strict';


$(function() {

    $('#slider').cycle({
        
        fx:         'scrollHorz',
        next:       '#next',
        prev:       '#prev',
        pager:      '#pager',
        timeout:    3000,
        speed:      1000,
        pause:      1
        
        
    });

    
    
    
    
$(".hamburger").on('click', function(e) {
    e.preventDefault();
    
    $(".menu").toggleClass('slide-down');
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