import bodymovin from 'lottie-web';
import logoAnimation from './data/data.json';
import openMenu from './lib/mobile-menu';

bodymovin.loadAnimation({
  container: document.getElementById('logo-animation-container'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: logoAnimation
});

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', openMenu );
