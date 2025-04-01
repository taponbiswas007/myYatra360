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
    initDefaultPilgrimsSlider();

    // Hover effect to switch between sliders
    $('.pilgrims-slider , .pilg-prev , .pilg-next').hover(
        function () { // Mouse Enter → Switch to Slider2
            destroyCurrentPilgrimsSlider();
            $('.pilgrims-slider')
                .removeClass('pilgrimsSliderDefault')
                .addClass('pilgrimsSliderHover');
            initHoverPilgrimsSlider();
        },
        function () { // Mouse Leave → Switch back to default
            destroyCurrentPilgrimsSlider();
            $('.pilgrims-slider')
                .removeClass('pilgrimsSliderHover')
                .addClass('pilgrimsSliderDefault');
            initDefaultPilgrimsSlider();
        }
    );

    // Destroy current Slick instance
    function destroyCurrentPilgrimsSlider() {
        var $slider = $('.pilgrims-slider');
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
        // Remove any leftover Slick classes
        $slider.removeClass('slick-initialized slick-slider');
    }

    // Default Pilgrims slider (fast autoplay)
    function initDefaultPilgrimsSlider() {
        $('.pilgrimsSliderDefault').slick({
            dots: false,
            infinite: true,
            speed: 4000,
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: false,
            centerPadding: '20px',
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            responsive: [{
                breakpoint: 1400,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }]
        });
    }

    // Hover-state Pilgrims slider (normal autoplay)
    function initHoverPilgrimsSlider() {
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
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1400,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }]
        });
    }



    // Initialize the default slider (bestrecommendedSlider)
    initDefaultSlider();

    // Hover effect to switch between sliders
    $('.best-recomended-slider-area , .best-prev , .best-next ').hover(
        function () { // Mouse Enter → Switch to Slider2
            destroyCurrentSlider();
            $('.best-recomended-slider-area')
                .removeClass('bestrecommendedSlider')
                .addClass('bestrecommendedSlider2');
            initSlider2();
        },
        function () { // Mouse Leave → Switch back to default Slider
            destroyCurrentSlider();
            $('.best-recomended-slider-area')
                .removeClass('bestrecommendedSlider2')
                .addClass('bestrecommendedSlider');
            initDefaultSlider();
        }
    );

    // Function to destroy the current Slick instance
    function destroyCurrentSlider() {
        if ($('.best-recomended-slider-area').hasClass('slick-initialized')) {
            $('.best-recomended-slider-area').slick('unslick');
        }
    }

    // Function to initialize the default slider (fast autoplay)
    function initDefaultSlider() {
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
    }

    // Function to initialize Slider2 (normal autoplay)
    function initSlider2() {
        $('.bestrecommendedSlider2').slick({
            prevArrow: $('.best-prev'),
            nextArrow: $('.best-next'),
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: true,
            centerPadding: '20px',
            autoplay: false,
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
    }



    // gallery slider area start

    // Initialize default slider on page load
    initDefaultGallerySlider();

    // Hover effect to switch between sliders
    $('.gallery-slider , .gallery-prev , .gallery-next').hover(
        function () { // Mouse Enter → Switch to Slider2
            if (!$('.gallery-slider').hasClass('gallerySliderHover')) {
                destroyCurrentGallerySlider();
                $('.gallery-slider')
                    .removeClass('gallerySliderDefault')
                    .addClass('gallerySliderHover');
                initHoverGallerySlider();
            }
        },
        function () { // Mouse Leave → Switch back to default
            if (!$('.gallery-slider').hasClass('gallerySliderDefault')) {
                destroyCurrentGallerySlider();
                $('.gallery-slider')
                    .removeClass('gallerySliderHover')
                    .addClass('gallerySliderDefault');
                initDefaultGallerySlider();
            }
        }
    );

    // Destroy current Slick instance more thoroughly
    function destroyCurrentGallerySlider() {
        var $slider = $('.gallery-slider');
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
        // Clean up any leftover Slick elements and classes
        $slider.find('.slick-list').remove();
        $slider.removeClass('slick-initialized slick-slider');
        $slider.find('[data-slick-index]').removeAttr('data-slick-index');
    }

    // Default Pilgrims slider (fast autoplay)
    function initDefaultGallerySlider() {
        $('.gallerySliderDefault').slick({
            prevArrow: $('.gallery-prev'),
            nextArrow: $('.gallery-next'),
            dots: false,
            infinite: true,
            speed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '20px',
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
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
    }

    // Hover-state Pilgrims slider (normal autoplay)
    function initHoverGallerySlider() {
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
            autoplay: false,
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
    }
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

});