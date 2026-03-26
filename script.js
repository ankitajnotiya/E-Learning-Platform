(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            $('#spinner').removeClass('show'); // Remove the spinner after 1ms
        }, 1);
    };
    spinner();

    // Initiate WOW.js for animations
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        $('.sticky-top').css('top', $(this).scrollTop() > 300 ? '0px' : '-100px');
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        $('.back-to-top').toggle($(this).scrollTop() > 300); // Show or hide back to top button
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo'); // Smooth scroll to top
        return false; // Prevent default action
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Toggle courses visibility
    let coursesVisible = false;
    $('#toggleCourses').click(function() {
        const hiddenCourses = $('.hidden-course');
        
        if (!coursesVisible) {
            hiddenCourses.slideDown();
            $(this).text('Show Less');
            coursesVisible = true;
        } else {
            hiddenCourses.slideUp();
            $(this).text('Show More');
            coursesVisible = false;
        }
    });

})(jQuery);
