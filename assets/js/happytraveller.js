$(document).ready(function(){
    $('.tr_card_slide').slick({
        
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
    
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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