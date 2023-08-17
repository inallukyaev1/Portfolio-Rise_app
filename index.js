import i18Obj from "./js/translate.js";

console.log("gg");

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-list"),
    menuItem = document.querySelectorAll(".nav-item"),
    hamburger = document.querySelector(".menu_hamburger");
  form;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});
const form = document.querySelector("form");
console.log(form);
//carousel images
const portfolioBtns = document.querySelector(".portfolio_wrapper");
const portfolioBtn = document.querySelectorAll(".portfolio_btn");
const portfolioImages = document.querySelectorAll(".portfolio-image");
const seasons = ["winter", "spring", "summer", "autumn"];
const lightEl = [
  "skills",
  "portfolio",
  "video",
  "price",
  "contacts",
  "body",
  "title",
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// const btnLightTheme = document.querySelector('.header-logo');

// btnLightTheme.addEventListener('click', () =>
//   lightEl.forEach(el => {
//     let element = document.querySelector(`.${el}`);
//     if (
//       element.className === 'body' ||
//       element.className === 'body light-theme-body'
//     ) {
//       element.classList.toggle('light-theme-body');
//     } else {
//       element.classList.toggle('light-theme');
//     }
//   })
// );
console.log("ggg");
// VideoPlayer
const playIcon = document.querySelector(".play");
const videoPlayer = document.querySelector(".videoplayer");
const viewer = document.querySelector(".viewer");

// translate
const lang = document.querySelectorAll(".active");

function changeImages() {
  portfolioBtns.addEventListener("click", function (event) {
    if (event.target.classList.contains("portfolio_btn")) {
      portfolioImages.forEach((img, index) => {
        console.log(event.target.dataset.season);
        img.src = `assets/images/${event.target.dataset.season}/${
          index + 1
        }.jpg`;
      });
    }
  });
}

// active btn
portfolioBtn.forEach((el) => {
  portfolioBtns.addEventListener("click", (e) => {
    if (e.target === el) {
      el.classList.add("active-btn");
    } else {
      el.classList.remove("active-btn");
    }
  });
});

function preloadSummerImages(season) {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/images/${season}/${i}.jpg`;
  }
}

function transLang(e) {
  const translate = document.querySelectorAll("[data-i18n]");

  translate.forEach((el) => {
    if (el.placeholder) {
      el.placeholder = i18Obj[e][el.dataset.i18n];
    } else {
      el.innerHTML = i18Obj[e][el.dataset.i18n];
    }
  });
}

function playAndPause(e) {
  e.preventDefault();
  console.log(e.target);

  playIcon.classList.toggle("hidden");
  if (playIcon.classList.contains("hidden")) {
    viewer.play();
  } else {
    viewer.pause();
  }
}

seasons.forEach((season) => preloadSummerImages(season));

changeImages();

videoPlayer.addEventListener("click", playAndPause);
videoPlayer.addEventListener("touchstart", playAndPause);

lang.forEach((el) => {
  el.addEventListener("click", (e) => {
    return transLang(e.target.innerHTML);
  });
});
