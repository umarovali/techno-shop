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
