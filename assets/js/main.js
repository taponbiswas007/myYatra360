$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.menu-content').slideToggle(500);
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
        prevArrow: $('.pil-prev'),
        nextArrow: $('.pil-next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // gallery-slider area
    $('.gallery-slider').slick({
        prevArrow: $('.gallery-prev'),
        nextArrow: $('.gallery-next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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



    // bestrecommendedSlider slider area
    // $('.bestrecommendedSlider').slick({
    //     prevArrow: $('.best-prev'),
    //     nextArrow: $('.best-next'),
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     centerPadding: '20px',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     responsive: [{
    //         breakpoint: 1400,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             infinite: true,
    //         }
    //     },
    //     {
    //         breakpoint: 993,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1
    //         }
    //     },
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    //     ]
    // });

    $('.bestrecommendedSlider').slick({
        prevArrow: $('.best-prev'),
        nextArrow: $('.best-next'),
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '20px',
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: false,
        touchThreshold: 100,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1400,
            settings: { slidesToShow: 3, slidesToScroll: 1 }
        },
        {
            breakpoint: 993,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
        }]
    });



    // have questions
    $('.questions-list li').click(function () {
        $('.questions-list li').removeClass('active');
        $(this).addClass('active');
    });


    // Initialize all counters on the page
    $('.counter-container').each(function () {
        const container = $(this);
        const counterBox = container.find('.counterbox');
        const increaseBtn = counterBox.find('.increase');
        const decreaseBtn = counterBox.find('.decrease');
        const countDisplay = counterBox.find('.countnumber');

        // Get settings from data attributes or use defaults
        const min = 0; // Fixed minimum value
        const max = parseInt(container.data('max')) || Infinity; // Unlimited by default
        let count = parseInt(container.data('start')) || min;

        // Update display with initial value
        countDisplay.text(count);
        updateButtonStates();

        // Increase button click handler
        increaseBtn.on('click', function () {
            if (count < max) {
                count++;
                countDisplay.text(count);
                updateButtonStates();
                container.trigger('counter:change', [count]);
            }
        });

        // Decrease button click handler
        decreaseBtn.on('click', function () {
            if (count > min) {
                count--;
                countDisplay.text(count);
                updateButtonStates();
                container.trigger('counter:change', [count]);
            }
        });

        // Update button disabled states
        function updateButtonStates() {
            decreaseBtn.prop('disabled', count <= min);
            increaseBtn.prop('disabled', count >= max);
        }

        // Public method to get current value
        container.getCount = function () {
            return count;
        };

        // Public method to set value
        container.setCount = function (newCount) {
            if (newCount >= min && newCount <= max) {
                count = newCount;
                countDisplay.text(count);
                updateButtonStates();
                container.trigger('counter:change', [count]);
            }
            return count;
        };
    });

    // Example of how to listen for changes on a specific counter
    $('.counter-container').on('counter:change', function (e, newCount) {
        console.log('Counter changed to:', newCount);
    });


    // Initial check on page load
    if ($('#flight').is(':checked')) {
        $('.forflight-area-fill').show();
    } else {
        $('.forflight-area-fill').hide();
    }

    // Change event handler for the checkbox
    $('#flight').change(function () {
        if ($(this).is(':checked')) {
            $('.forflight-area-fill').show();
        } else {
            $('.forflight-area-fill').hide();
        }
    });

});