$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.menu-content').slideToggle(), 500;
    });


    // main banner items slider
    const $slides = $('.banner-slider-item');
    let currentSlide = 0;
    const slideInterval = 3000; // 3 seconds

    function showNextSlide() {
        // Fade out current slide
        $slides.eq(currentSlide).removeClass('active');

        // Move to next slide (loop back to 0 if at end)
        currentSlide = (currentSlide + 1) % $slides.length;

        // Fade in next slide
        $slides.eq(currentSlide).addClass('active');
    }

    // Start the slideshow
    let slideTimer = setInterval(showNextSlide, slideInterval);

    // Optional: Pause on hover
    $('.hero-image-area')
        .on('mouseenter', function () {
            clearInterval(slideTimer);
        })
        .on('mouseleave', function () {
            slideTimer = setInterval(showNextSlide, slideInterval);
        });



    // banner slider package card card 
    $('.bannerpackage-card').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

    });

    // pilgrims slider area
    $('.pilgrims-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});