function toggleMenu() {
  const menuIcon = document.querySelector(".menuIcon");
  const navBar = document.getElementById("navbar");
  menuIcon.classList.toggle("active");
  navBar.classList.toggle("active");
}

const slideShow = document.getElementById("slideShow");
const slides = slideShow.getElementsByTagName("video");
var index = 0;
function NextVideo() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function PrevVideo() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

const slideShowText = document.getElementById("slideShowText");
const slidesText = slideShowText.getElementsByTagName("div");
var i = 0;
function NextSlideText() {
  slidesText[i].classList.remove("active");
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add("active");
}

function PrevSlideText() {
  slidesText[i].classList.remove("active");
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add("active");
}
