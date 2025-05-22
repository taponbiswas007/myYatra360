$(document).ready(function () {
    $('.tr_card_slide').slick({

        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
        loop: true,

        responsive: [{
                breakpoint: 1620,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.viewdetailsslider').slick({
        prevArrow: $('.viewmore-prev'),
        nextArrow: $('.viewmore-next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
        loop: true,

        responsive: [{
                breakpoint: 1620,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.travellers_details_slide').slick({
        prevArrow: $('.tr_d_prev'),
        nextArrow: $('.tr_d_next'),
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
        loop: true,

    });

})