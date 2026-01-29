// swiepr hero

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

// infinity swiper

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

// scrol mini card

const wrapperMiniCard = document.querySelector('.product_mini_scrool');
const listMiniCard = document.querySelector('.product_mini_wrapper');

function updateScrollAlign() {
    if (listMiniCard.scrollWidth > wrapperMiniCard.clientWidth) {
        listMiniCard.style.margin = '0';
    } else {
        listMiniCard.style.margin = '0 auto';
    }
}

updateScrollAlign();
window.addEventListener('resize', updateScrollAlign);

// swiper card

const productSwiper = new Swiper('.product-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    speed: 600,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    grabCursor: true,
});