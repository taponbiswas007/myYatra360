$(document).ready(function(){
      // offer card slider
    $('.offerCardSlider').slick({
        prevArrow: $('.offC-prev'),
        nextArrow: $('.offC-next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // whychoose card slider
    $('.whychooseUsSlider').slick({
        prevArrow: $('.wchus-prev'),
        nextArrow: $('.wchus-next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});