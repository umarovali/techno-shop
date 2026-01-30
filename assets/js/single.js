var swiper = new Swiper(".siwper_thumbus", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".swiper-card", {
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 5,
    thumbs: {
        swiper: swiper,
    },
});
