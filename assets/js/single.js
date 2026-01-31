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

// chapter active accardion active

const chapterList = document.querySelector('.chapter_nav_list');
const tabs = document.querySelectorAll('.chapter_nav_text');
const arrows = document.querySelectorAll('.chapter_arrow');
const sections = document.querySelectorAll('.chapters');

let firstClickDone = false;

function openSection(tab) {
  const target = tab.dataset.tab;
  const sectionToShow = document.querySelector(`.chapters[data-content="${target}"]`);
  if (!sectionToShow) return;

  sections.forEach(s => s.classList.remove('active'));
  sectionToShow.classList.add('active');

  arrows.forEach(a => a.classList.add('rotate-right'));
  const activeArrow = tab.querySelector('.chapter_arrow');
  if (activeArrow) activeArrow.classList.remove('rotate-right');

  tabs.forEach(t => t.classList.remove('chapter_nav_text-active'));
  tab.classList.add('chapter_nav_text-active');
}

chapterList.addEventListener('click', (e) => {
  const arrow = e.target.closest('.chapter_arrow');
  const tab = e.target.closest('.chapter_nav_text');
  if (!arrow || !tab) return;

  if (!firstClickDone) {
    chapterList.classList.add('open');
    arrows.forEach(a => a.classList.add('rotate-right'));
    firstClickDone = true;
    sections.forEach(s => s.classList.remove('active'));
    return;
  }

  openSection(tab);
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (!firstClickDone) {
      chapterList.classList.add('open');
      arrows.forEach(a => a.classList.add('rotate-right'));
      firstClickDone = true;
      sections.forEach(s => s.classList.remove('active'));
    }

    openSection(tab);
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
