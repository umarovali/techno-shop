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

// charapter drop down menu

const chapterArrowTop = document.querySelector(".chapter_arrow-top");
const chapterList = document.querySelector(".chapter_nav_list");
const allArrows = document.querySelectorAll(".chapter_arrow");

chapterArrowTop.addEventListener("click", () => {
  chapterList.classList.toggle("open");

  allArrows.forEach(arrow => {
    arrow.classList.toggle("rotate-right");
  });
});


// video play pouse

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video_wrapper video");
  const playBtn = document.querySelector(".video_play");
  const icon = playBtn.querySelector("i");

  video.pause();

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.muted = false;
      video.play();

      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      video.pause();

      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });

  video.addEventListener("ended", () => {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  });
});
