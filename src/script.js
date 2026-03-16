import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  /*loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },*/
  loop: true,              // bucle infinito
  slidesPerView: 1,        // solo 1 slide visible
  spaceBetween: 0,          // espacio entre slides
  autoplay: {               // autoplay activo
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});