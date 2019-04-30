function updateVideo() {
  document.querySelectorAll('.video').forEach((cont) => {
    const jcont = $(cont);
    const video = cont.querySelector('video');
    const progress = jcont.find('.video__progress');
    let moving = false;

    progress.slider({
      value: 0,
      max: video.duration,
      orientation: 'horizontal',
      range: 'min',
      animate: true,
      start(event, ui) {
        moving = true;
      },
      stop(event, ui) {
        video.currentTime = ui.value;
        moving = false;
      },
    });

    video.volume = 0.5;

    video.addEventListener('timeupdate', () => {
      if (!moving) progress.slider('value', video.currentTime);
    });

    video.addEventListener('ended', () => {
      const play = cont.querySelector('.fa-pause');
      if (play) {
        play.className = 'fa fa-play';
      }
    });
    
    function play(video, play) {
      if (play.className === 'fa fa-play') {
        video.play();
        play.className = 'fa fa-pause';
      } else if (play.className === 'fa fa-pause') {
        video.pause();
        play.className = 'fa fa-play';
      }
    }
  
    function fullscreen(video) {
      const state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
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

    cont.querySelector('.video__fullscreen').addEventListener('click', (e) => {
      fullscreen(video);
    });

    cont.querySelector('.video__play').addEventListener('click', function (e) {
      const icon = this.querySelector('button i');
      play(video, icon);
    });
  });
}

export default updateVideo;
