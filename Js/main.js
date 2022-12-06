/*=================================
// == This Project For Waheed == //
===================================*/

/*===================
  == Header Section ==
  ===================*/
let megaLink = document.querySelector(".mega-click");
let megaMenu = document.querySelector(".header .main-nav .mega-menu");
let links = document.querySelectorAll(
  ".header .main-nav .mega-menu .links .close-mega"
);

megaLink.addEventListener("click", function () {
  megaMenu.style.opacity = "1";
  megaMenu.style.zIndex = "10";
  megaMenu.style.top = "106%";
});
addEventListener("scroll", () => {
  megaMenu.style.opacity = "0";
});
/*=================
// == Drop Up == //
/*=================*/

let DropUp = document.querySelector(".drop-up");

addEventListener("scroll", () => {
  this.scrollY >= 1078
    ? (DropUp.style.left = "50px")
    : (DropUp.style.left = "-50px");
});

/*===================
  == Event Section ==
  ===================*/
// => The End Of The Year Date To Countdown To
let countDownDate = new Date("Dec 31 2022 23:59:59").getTime();
let counter = setInterval(() => {
  // => Get Date Now
  let dateNow = new Date().getTime();
  // Find The Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval();
  }
}, 1000);
//
/*===================
  == Stats Section ==
  ===================*/
let StatNumber = document.querySelectorAll(".stats .number");
let StatSection = document.querySelector(".stats");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
addEventListener("scroll", function () {
  if (window.scrollY >= StatSection.offsetTop - 100) {
    if (!started) {
      StatNumber.forEach((num) => startCount(num));
    }
    started = true;
  }
});
/*================
  == Our Skills ==
  ================*/

let SkillSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .the-progress span");

addEventListener("scroll", function () {
  if (window.scrollY >= SkillSection.offsetTop - 50) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
