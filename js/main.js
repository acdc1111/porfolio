$(document).ready(function () {
    $('.switch').click(function (e) {
        e.preventDefault();
        $('.switch').toggleClass('active')
        $('body').toggleClass('dark')
    });

    // slider
    $(".portfolios-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    })

    $(".btn-prev").click(function(){
        $(".portfolios-slider").slick("slickPrev")  
    })

    $(".btn-next").click(function(){
        $(".portfolios-slider").slick("slickNext")  
    })

    $(".slider-btn").click(function (e) { 
        e.preventDefault();
        $(".slider-btn").removeClass("active")
        $(this).addClass("active")
    });

    $(".slider-news").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    })

    $(".testimonials-sliders").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    })

    // tab items

    $(".experices-list").on("click", ".experices-item:not(.active)", function(){
        $(this).addClass("active")
            .siblings()
            .removeClass("active")
            .closest('.experices-wrapper')
            .find('.experisec-tabs .tab')
            .removeClass('active')
            .eq($(this).index())
            .addClass('active')
    })
});