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
        allowTouchMove: true,
        loop: true,
        breakpoints: {
            768: {
                direction: 'vertical',
            },
            480: {
                // loopedSlides: 2.5,
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
        // breakpoints: {
        //     1024: {
        //         slidesPerView: 5, // 한 화면에 보일 섬네일 개수
        //         loopedSlides: 5 // 위 섬네일 개수와 동일한 수치 설정
        //     },
        //     768: {
        //         slidesPerView: 3.5,
        //         loopedSlides: 3.5
        //     },
        //     480: {
        //         slidesPerView: 2.5,
        //         loopedSlides: 2.5
        //     }
        // }
        thumbs: {
            swiper: thumbSwiper,
        },
    });
});
