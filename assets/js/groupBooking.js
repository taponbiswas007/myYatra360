$(document).ready(function(){
    $('.groupBookingSlider').slick({
        prevArrow: $('.group-prev'),
        nextArrow: $('.group-next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
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
    
})