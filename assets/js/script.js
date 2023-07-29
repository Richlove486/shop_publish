$(document).ready(function () {
    /* 섹션02 슬라이드 */
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        speed: 800,
        loop: true,
        loopedSlides: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 16,
            },
            500: {
                slidesPerView: 2.3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 16,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 섹션03 갤러리 썸네일
    var thumbSwiper = new Swiper('.gallery_thumb', {
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            768: {
                direction: 'vertical',
            },
        },
    });
    // 섹션03 갤러리 메인
    var mainSwiper = new Swiper('.gallery_main', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slideToClickedSlide: true,
        loop: true,
        thumbs: {
            swiper: thumbSwiper,
        },
    });

    // 섹션05 커머스 글귀
    var videoSwiper = new Swiper('.commerce_wrap', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        loopedSlides: 3,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        observer: true,
        breakpoints: {
            320: {
                slidesPerView: 1.6,
                loopedSlides: 1.6,
                spaceBetween: 16,
            },
            500: {
                slidesPerView: 2.5,
                loopedSlides: 2.5,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 3.5,
                loopedSlides: 3.5,
                spaceBetween: 16,
            },
        },
    });
    // 섹션05 커머스 비디오
    var videoMainSwiper = new Swiper('.commerce_video', {
        slidesPerView: 1,
        spaceBetween: 0,
        // allowTouchMove: false,
        loop: true,
        // thumbs: {
        //     swiper: videoSwiper,
        // },
    });
    videoSwiper.controller.control = videoMainSwiper;
    videoMainSwiper.controller.control = videoSwiper;
});
