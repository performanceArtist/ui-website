import Video from './video';

window.addEventListener('load', () => {
  document.querySelectorAll('.video').forEach(video => new Video(video));
});
