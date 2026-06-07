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

const playButton = document.getElementById('play-video');

if (playButton) {
  playButton.addEventListener('click', () => {
    document.getElementById('video-container').innerHTML = `
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Bd47uyuYwwM?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  });
}