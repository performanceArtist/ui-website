function play(video, playButton) {
  if (playButton.className === 'video__play') {
    video.play();
    playButton.className = 'video__pause';
  } else if (playButton.className === 'video__pause') {
    video.pause();
    playButton.className = 'video__play';
  }
}

function fullscreen(video) {
  const state =
    document.fullScreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen;
  if (!state) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  }
}

function updateVideo() {
  document.querySelectorAll('.video').forEach(cont => {
    const jcont = $(cont);
    const progress = jcont.find('.video__progress');
    const video = cont.querySelector('video');
    let moving = false;

    progress.slider({
      value: 0,
      max: video.duration,
      orientation: 'horizontal',
      range: 'min',
      animate: true,
      start() {
        moving = true;
      },
      stop(event, ui) {
        video.currentTime = ui.value;
        moving = false;
      }
    });

    video.volume = 0.5;

    video.addEventListener('timeupdate', () => {
      if (!moving) progress.slider('value', video.currentTime);
    });

    video.addEventListener('ended', () => {
      const playButton = cont.querySelector('.video__pause');
      if (playButton) {
        playButton.className = 'video__play';
      }
    });

    cont.querySelector('.video__fullscreen').addEventListener('click', () => {
      fullscreen(video);
    });

    cont.querySelector('.video__play').addEventListener('click', e => {
      play(video, e.currentTarget);
    });
  });
}

export default updateVideo;
