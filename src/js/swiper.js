import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let mainSwiper = null;

function initMainSwiper() {
  if (window.innerWidth < 1440 && !mainSwiper) {
    mainSwiper = new Swiper('.main-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.2,
      spaceBetween: 16,

      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      speed: 700,
    });
  }
}

function destroyMainSwiper() {
  if (window.innerWidth >= 1440 && mainSwiper) {
    mainSwiper.destroy(true, true);
    mainSwiper = null;
  }
}

function handleMainSwiper() {
  initMainSwiper();
  destroyMainSwiper();
}

handleMainSwiper();

window.addEventListener('resize', handleMainSwiper);