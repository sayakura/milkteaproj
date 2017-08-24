$(document).ready(function(){
    $(".animated").mouseenter(function(){
        $(this).addClass("bounce");
    }).mouseleave(function(){
        $(this).removeClass("bounce");
    });
});