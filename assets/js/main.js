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

    // Initialize default Pilgrims slider
    // initDefaultPilgrimsSlider();

    // // Hover effect to switch between sliders
    // $('.pilgrims-slider , .pilg-prev , .pilg-next').hover(
    //     function () { // Mouse Enter → Switch to Slider2
    //         destroyCurrentPilgrimsSlider();
    //         $('.pilgrims-slider')
    //             .removeClass('pilgrimsSliderDefault')
    //             .addClass('pilgrimsSliderHover');
    //         initHoverPilgrimsSlider();
    //     },
    //     function () { // Mouse Leave → Switch back to default
    //         destroyCurrentPilgrimsSlider();
    //         $('.pilgrims-slider')
    //             .removeClass('pilgrimsSliderHover')
    //             .addClass('pilgrimsSliderDefault');
    //         initDefaultPilgrimsSlider();
    //     }
    // );

    // // Destroy current Slick instance
    // function destroyCurrentPilgrimsSlider() {
    //     var $slider = $('.pilgrims-slider');
    //     if ($slider.hasClass('slick-initialized')) {
    //         $slider.slick('unslick');
    //     }
    //     // Remove any leftover Slick classes
    //     $slider.removeClass('slick-initialized slick-slider');
    // }

    // // Default Pilgrims slider (fast autoplay)
    // function initDefaultPilgrimsSlider() {
    //     $('.pilgrimsSliderDefault').slick({
    //         dots: false,
    //         infinite: true,
    //         speed: 4000,
    //         slidesToShow: 4,
    //         slidesToScroll: 3,
    //         arrows: false,
    //         centerPadding: '20px',
    //         autoplay: true,
    //         autoplaySpeed: 0,
    //         cssEase: 'linear',
    //         responsive: [{
    //             breakpoint: 1400,
    //             settings: { slidesToShow: 3 }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: { slidesToShow: 2 }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: { slidesToShow: 1 }
    //         }]
    //     });
    // }

    // // Hover-state Pilgrims slider (normal autoplay)
    // function initHoverPilgrimsSlider() {
    //     $('.pilgrimsSliderHover').slick({
    //         prevArrow: $('.pilg-prev'),
    //         nextArrow: $('.pilg-next'),
    //         dots: false,
    //         infinite: true,
    //         speed: 300,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         centerPadding: '20px',
    //         autoplay: false,
    //         autoplaySpeed: 2000,
    //         responsive: [{
    //             breakpoint: 1400,
    //             settings: { slidesToShow: 3 }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: { slidesToShow: 2 }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: { slidesToShow: 1 }
    //         }]
    //     });
    // }

    $('.pilgrimsSliderHover').slick({
        prevArrow: $('.pilg-prev'),
        nextArrow: $('.pilg-next'),
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
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1.5 }
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
        }]
    });

    // Initialize the default slider (bestrecommendedSlider)
    // initDefaultSlider();

    // // Hover effect to switch between sliders
    // $('.best-recomended-slider-area , .best-prev , .best-next ').hover(
    //     function () { // Mouse Enter → Switch to Slider2
    //         destroyCurrentSlider();
    //         $('.best-recomended-slider-area')
    //             .removeClass('bestrecommendedSlider')
    //             .addClass('bestrecommendedSlider2');
    //         initSlider2();
    //     },
    //     function () { // Mouse Leave → Switch back to default Slider
    //         destroyCurrentSlider();
    //         $('.best-recomended-slider-area')
    //             .removeClass('bestrecommendedSlider2')
    //             .addClass('bestrecommendedSlider');
    //         initDefaultSlider();
    //     }
    // );

    // // Function to destroy the current Slick instance
    // function destroyCurrentSlider() {
    //     if ($('.best-recomended-slider-area').hasClass('slick-initialized')) {
    //         $('.best-recomended-slider-area').slick('unslick');
    //     }
    // }

    // // Function to initialize the default slider (fast autoplay)
    // function initDefaultSlider() {
    //     $('.bestrecommendedSlider').slick({
    //         prevArrow: $('.best-prev'),
    //         nextArrow: $('.best-next'),
    //         dots: false,
    //         infinite: true,
    //         speed: 4000,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         centerPadding: '20px',
    //         autoplay: true,
    //         autoplaySpeed: 0,
    //         cssEase: 'linear',
    //         pauseOnHover: true,
    //         pauseOnFocus: false,
    //         touchThreshold: 100,
    //         swipeToSlide: true,
    //         responsive: [{
    //             breakpoint: 1400,
    //             settings: { slidesToShow: 3, slidesToScroll: 1 }
    //         },
    //         {
    //             breakpoint: 993,
    //             settings: { slidesToShow: 2, slidesToScroll: 1 }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: { slidesToShow: 1, slidesToScroll: 1 }
    //         }]
    //     });
    // }

    // // Function to initialize Slider2 (normal autoplay)
    // function initSlider2() {
    //     $('.bestrecommendedSlider2').slick({
    //         prevArrow: $('.best-prev'),
    //         nextArrow: $('.best-next'),
    //         dots: false,
    //         infinite: true,
    //         speed: 300,
    //         slidesToShow: 4,
    //         slidesToScroll: 3,
    //         arrows: true,
    //         centerPadding: '20px',
    //         autoplay: false,
    //         autoplaySpeed: 2000,
    //         responsive: [{
    //             breakpoint: 1400,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //             }
    //         },
    //         {
    //             breakpoint: 993,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }]
    //     });
    // }

    $('.bestrecommendedSlider').slick({
        prevArrow: $('.best-prev'),
        nextArrow: $('.best-next'),
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
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // gallery slider area start

    // Initialize default slider on page load
    // initDefaultGallerySlider();

    // // Hover effect to switch between sliders
    // $('.gallery-slider , .gallery-prev , .gallery-next').hover(
    //     function () { // Mouse Enter → Switch to Slider2
    //         if (!$('.gallery-slider').hasClass('gallerySliderHover')) {
    //             destroyCurrentGallerySlider();
    //             $('.gallery-slider')
    //                 .removeClass('gallerySliderDefault')
    //                 .addClass('gallerySliderHover');
    //             initHoverGallerySlider();
    //         }
    //     },
    //     function () { // Mouse Leave → Switch back to default
    //         if (!$('.gallery-slider').hasClass('gallerySliderDefault')) {
    //             destroyCurrentGallerySlider();
    //             $('.gallery-slider')
    //                 .removeClass('gallerySliderHover')
    //                 .addClass('gallerySliderDefault');
    //             initDefaultGallerySlider();
    //         }
    //     }
    // );

    // // Destroy current Slick instance more thoroughly
    // function destroyCurrentGallerySlider() {
    //     var $slider = $('.gallery-slider');
    //     if ($slider.hasClass('slick-initialized')) {
    //         $slider.slick('unslick');
    //     }
    //     // Clean up any leftover Slick elements and classes
    //     $slider.find('.slick-list').remove();
    //     $slider.removeClass('slick-initialized slick-slider');
    //     $slider.find('[data-slick-index]').removeAttr('data-slick-index');
    // }

    // // Default Pilgrims slider (fast autoplay)
    // function initDefaultGallerySlider() {
    //     $('.gallerySliderDefault').slick({
    //         prevArrow: $('.gallery-prev'),
    //         nextArrow: $('.gallery-next'),
    //         dots: false,
    //         infinite: true,
    //         speed: 4000,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         centerPadding: '20px',
    //         autoplay: true,
    //         autoplaySpeed: 0,
    //         cssEase: 'linear',
    //         responsive: [{
    //             breakpoint: 1400,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }]
    //     });
    // }

    // // Hover-state Pilgrims slider (normal autoplay)
    // function initHoverGallerySlider() {
    //     $('.gallerySliderHover').slick({
    //         prevArrow: $('.gallery-prev'),
    //         nextArrow: $('.gallery-next'),
    //         dots: false,
    //         infinite: true,
    //         speed: 300,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         centerPadding: '20px',
    //         autoplay: false,
    //         autoplaySpeed: 2000,
    //         responsive: [{
    //             breakpoint: 1400,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }]
    //     });
    // }
    $('.gallerySliderHover').slick({
        prevArrow: $('.gallery-prev'),
        nextArrow: $('.gallery-next'),
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
                slidesToShow: 3,
                slidesToScroll: 1
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
        }]
    });
    // gallery slider area end

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






    // Package details hero slider
    $('.packageDetailsheroslider').slick({
        prevArrow: $('.details_hero_slider_prev'),
        nextArrow: $('.details_hero_slider_next'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        cssEase: "linear",
        pushOnHover: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
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
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // room select
    $('.roomlist .roomitem button').click(function () {
        $('.roomlist .roomitem').removeClass('active');
        $(this).closest('.roomitem').addClass('active');
    });

    // person counter
    $('.person-counter').each(function () {
        const container = $(this);
        const counterBox = container.find('.counterbox');
        const increaseBtn = counterBox.find('.plus');
        const decreaseBtn = counterBox.find('.minus');
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


    // Itinerary and summery selector
    $('.itinerary_and_summary_selector li').click(function () {
        $('.itinerary_and_summary_selector li').removeClass('active');
        $(this).addClass('active');
    });

    // Itinerary content details viewer
    $('.itinerarylist .itineryitem .itineraryitem_header').click(function () {
        $('.itinerarylist .itineryitem').removeClass('active');
        $(this).closest('.itineryitem').addClass('active');
    });


    // add section
    $('.addscloseicon').click(function () {
        $('.adds_section').css('right', '-100%');
        $('.open_add_section').css({
            'right': '0',
            'delay': '0.5s',
        });

    });
    $('.open_add_section').click(function () {
        $('.adds_section').css({

            'right': '0',
            'transition': 'all 0.5s ease',
            'delay': '0.5s',
        });
        $('.open_add_section').css({
            'right': '-100%',
            'delay': '0.5s',
        });

    });

    $('.itinerarybtn').click(function () {
        $('.itinerary_list_area').fadeIn();
        $('.summery_items_area').fadeOut();
    });
    $('.summarybtn').click(function () {
        $('.itinerary_list_area').fadeOut();
        $('.summery_items_area').fadeIn();
    });










});

const container = document.querySelector(".pilgrimsSwiper");

var swiper = new Swiper(".pilgrimsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 6000,
    freeMode: true,
    allowTouchMove: true,

    autoplay: {
        delay: 0,

    }
    ,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        420: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }


});
function stopAutoplay() {
    const swiperTranslate = swiper.getTranslate();
    swiper.setTranslate(swiperTranslate);
    swiper.autoplay.stop();
}
function startAutoplay() {
    swiper.slideTo(swiper.activeIndex, 3000, false)
    swiper.autoplay.start();
}
container.addEventListener("mouseenter", () => stopAutoplay());
container.addEventListener("mouseleave", () => startAutoplay());


// const container = document.querySelector(".pilgrimsSwiper");

// var swiper = new Swiper(".pilgrimsSwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     loop: true,
//     speed: 6000,
//     freeMode: true,
//     allowTouchMove: false,
//     autoplay: {
//         delay: 0,
//     },
//     navigation: {
//         nextEl: '.pilg-next',
//         prevEl: '.pilg-prev',
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         420: {
//             slidesPerView: 1.5,
//             spaceBetween: 20,
//         },
//         576: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 2.5,
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 3.5,
//             spaceBetween: 30,
//         },
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     }
// });

// function stopAutoplay() {
//     const swiperTranslate = swiper.getTranslate();
//     swiper.setTranslate(swiperTranslate);
//     swiper.autoplay.stop();
// }

// function startAutoplay() {
//     swiper.slideTo(swiper.activeIndex, 3000, false)
//     swiper.autoplay.start();
// }

// // Add event listeners for container hover
// container.addEventListener("mouseenter", () => stopAutoplay());
// container.addEventListener("mouseleave", () => startAutoplay());

// // Add event listeners for custom arrows
// document.querySelector('.pilg-prev').addEventListener('click', function () {
//     stopAutoplay();
//     swiper.slidePrev();
//     // Optional: restart autoplay after a delay if you want
//     // setTimeout(startAutoplay, 3000);
// });

// document.querySelector('.pilg-next').addEventListener('click', function () {
//     stopAutoplay();
//     swiper.slideNext();
//     // Optional: restart autoplay after a delay if you want
//     // setTimeout(startAutoplay, 3000);
// });


