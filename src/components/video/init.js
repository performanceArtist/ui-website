import Video from './video';

window.addEventListener('load', () => {
  document.querySelectorAll('.js-video').forEach(video => new Video(video));
});
