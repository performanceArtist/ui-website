class Video {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.initVideoControls = this.initVideoControls.bind(this);
    this.play = this.play.bind(this);
    this.fullscreen = this.fullscreen.bind(this);

    this.init();
    this.initVideoControls();
  }

  init() {
    this.video = this.root.querySelector('video');

    this.playButton = this.root.querySelector('.video__play-button');
    this.fullscreenButton = this.root.querySelector('.video__fullscreen');
    this.sliderActive = false;
    const that = this;
    this.$progress = $(this.root.querySelector('.video__progress')).slider({
      value: 0,
      max: this.video.duration,
      orientation: 'horizontal',
      range: 'min',
      start() {
        that.sliderActive = true;
      },
      stop(event, ui) {
        that.video.currentTime = ui.value;
        that.sliderActive = false;
      }
    });
  }

  initVideoControls() {
    this.video.volume = 0.5;

    this.video.addEventListener('timeupdate', () => {
      if (!this.sliderActive) {
        this.$progress.slider({ value: this.video.currentTime });
      }
    });

    this.video.addEventListener('ended', () => {
      this.playButton.classList.remove('video__play-button_pause');
      this.playButton.classList.add('video__play-button_play');
    });

    this.fullscreenButton.addEventListener('click', () => {
      this.fullscreen();
    });

    this.playButton.addEventListener('click', () => {
      this.play();
    });
  }

  play() {
    if (this.playButton.classList.contains('video__play-button_play')) {
      this.video.play();
      this.playButton.classList.remove('video__play-button_play');
      this.playButton.classList.add('video__play-button_pause');
    } else {
      this.video.pause();
      this.playButton.classList.remove('video__play-button_pause');
      this.playButton.classList.add('video__play-button_play');
    }
  }

  fullscreen() {
    const state =
      document.fullScreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen;
    if (!state) {
      if (this.video.requestFullscreen) {
        this.video.requestFullscreen();
      } else if (this.video.msRequestFullscreen) {
        this.video.msRequestFullscreen();
      } else if (this.video.mozRequestFullScreen) {
        this.video.mozRequestFullScreen();
      } else if (this.video.webkitRequestFullscreen) {
        this.video.webkitRequestFullscreen();
      }
    }
  }
}

window.addEventListener('load', () => {
  document.querySelectorAll('.video').forEach(video => new Video(video));
});
