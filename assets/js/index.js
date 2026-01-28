document.addEventListener('DOMContentLoaded', () => {
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },

        speed: 800,
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const benefitsSwiper = new Swiper('.benefits-brands-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 8000,
        freeMode: true,
        freeModeMomentum: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
    });
});

