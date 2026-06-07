import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';

import AOS from 'aos';

AOS.init({
  duration: 1000, 
  once: true,     
});

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,              
  slidesPerView: 1,        
  spaceBetween: 0,          
  autoplay: {               
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

document.querySelectorAll('.video-play').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('.video-container');
    const videoId = container.dataset.video;

    container.innerHTML = `
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  });
});