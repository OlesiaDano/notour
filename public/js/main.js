$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
$("#burger-menu").on("click",function(){
    $("#navbar").toggle();
});
$(document).ready(function() {
    $(".position-contact").customScrollbar();
});
$(document).ready(function() {
    $('.select-menu').niceSelect();
});