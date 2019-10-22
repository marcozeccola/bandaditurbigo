$(document).ready(function () {

    $('.button-collapse').sideNav();
    $('.slider').slider({
        indicators: false,
        transition:700,
    });

    


    $('.parallax').parallax();


    
    $('.scrollspy').scrollSpy({
        scrollOfffset: 0
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".nav-wrapper").css("background", "rgb(88,88,88,0.45)");
            $(".nav-wrapper").css("padding-top", "0px");
            $(".menu").css( "color", "#ea454b");
        } else {
            $(".nav-wrapper").css("background", "transparent");
            $(".nav-wrapper").css("padding-top", "10px");
            $(".menu").css( "color", "#FFFF");
        }
    });
})