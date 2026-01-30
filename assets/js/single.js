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

const chapterArrow = document.querySelector("#chapter_list");
const chapterList = document.querySelector(".chapter_nav_list");

chapterArrow.addEventListener("click", () => {
  chapterArrow.classList.toggle("rotate");
  chapterList.classList.toggle("open");
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

// recent swiper

const recentSwiper = new Swiper('.recent-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 600,

  watchOverflow: true,
  centerInsufficientSlides: true, // центрируем, если мало карточек

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesOffsetBefore: 15,
      slidesOffsetAfter: 15,
    },
    431: {
      spaceBetween: 20,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
  },
});

