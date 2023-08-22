$(document).ready(function () {
    /* 섹션02 슬라이드 */
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        loopedSlides: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                loopedSlides: 1.1,
                spaceBetween: 16,
            },
            500: {
                slidesPerView: 2.3,
                loopedSlides: 2.3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 2.5,
                loopedSlides: 2.5,
                spaceBetween: 16,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
