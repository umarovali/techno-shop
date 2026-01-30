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

const chapterArrow = document.querySelector("#chapter_list");
const chapterList = document.querySelector(".chapter_nav_list");

chapterArrow.addEventListener("click", () => {
    chapterArrow.classList.toggle("rotate"); 
    chapterList.classList.toggle("open");    
});