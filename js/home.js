//slider js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  // centeredSlides: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
import header from "./header.js";
header();