$(document).ready(function(){
    $(".next").click(function(){
        $(".slide-1").hide();
        $(".slide-2").show();

        $("slide-1").hide();
    });
    $(".prev").click(function(){
        $(".slide-1").show();
        $(".slide-2").hide();
    });
})