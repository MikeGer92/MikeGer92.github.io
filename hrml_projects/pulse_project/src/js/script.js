$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: false,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]

    });
});