$(document).ready(function () {
    'use strict';
    /** animation stopper on resize */
    document.body.classList.remove("resize-animation-stopper");
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    let header = $("header");
    let bodyOverlay = $(".body__overlay");
    let headerNav = $("#header-nav");
    let hamburger = $("#header-hamburger");
    let navBarItem = $(".nav-bar__item");

    /** hamburger menu*/
    hamburger.click(function (event) {
        headerNav.toggleClass("nav-bar--open");
        bodyOverlay.toggleClass("body__overlay--open");
        header.toggleClass("header--mobile-open");
    });
    bodyOverlay.click(function (event) {
        if (headerNav.hasClass("nav-bar--open")) {
            headerNav.removeClass("nav-bar--open");
            hamburger.removeClass("hamburger--open");
            bodyOverlay.removeClass("body__overlay--open");
            header.removeClass("header--mobile-open");
        }
    });
    navBarItem.click(function (event) {
        if (headerNav.hasClass("nav-bar--open")) {
            headerNav.removeClass("nav-bar--open");
            hamburger.removeClass("hamburger--open");
            bodyOverlay.removeClass("body__overlay--open");
            header.removeClass("header--mobile-open");
        }
    });

    /** scroll animation */
    if (scroll > 0) {
        header.addClass("header--scrolled");
    } else {
        header.removeClass("header--scrolled");
    }

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 0) {
            header.addClass("header--scrolled");
        } else {
            header.removeClass("header--scrolled");
        }
    });

    /** Hero Swiper*/
    const heroSwiper = new Swiper('.hero .swiper-container', {
        pagination: {
            el: '.hero .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero .swiper-button-next',
            prevEl: '.hero .swiper-button-prev',
        },
    });

    /** Assortment Swiper*/
    const assortmentSwiper = new Swiper('.assortment .product-slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
            },
            1024: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 20,
                loop: false,
            }
        }
    });

    $('.flexslider').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: false,
        controlNav: "thumbnails",
    });

    /** Reviews Swiper*/
    const reviewsSwiper = new Swiper('.reviews .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.reviews .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews .swiper-button-next',
            prevEl: '.reviews .swiper-button-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: false,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 44,
                pagination: false,
            },
        }
    });

    /** Promotions Swiper*/
    const promotionsSwiper = new Swiper('.promotions .swiper-container', {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    /** hamburger animation */
    /**
     * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
     *
     * @private
     * @author Todd Motto
     * @link https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
     * @callback requestCallback      callback   - Callback function for each iteration.
     * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
     * @returns {}
     */
    let forEach = function (t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    let hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("hamburger--open");
            }, false);
        });
    }


    /** scrollToTopBtn animation*/
        let scrollToTopBtn = document.getElementById("scrollToTopBtn");
        let rootElement = document.documentElement;
        function handleScroll() {
            // Do something on scroll
            let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
            if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
                // Show button
                scrollToTopBtn.classList.add("scrollToTopBtn--show");
            } else {
                // Hide button
                scrollToTopBtn.classList.remove("scrollToTopBtn--show");
            }
        }
        function scrollToTop() {
            // Scroll to top logic
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        scrollToTopBtn.addEventListener("click", scrollToTop);
        document.addEventListener("scroll", handleScroll);

});

