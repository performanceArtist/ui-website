class Video {
  constructor(container) {
    this.container = container;
    this.video = container.querySelector('video');
    this.$progress = $(container.querySelector('.video__progress'));
    this.playButton = container.querySelector('.video__play-button');
    this.fullscreenButton = container.querySelector('.video__fullscreen');
    this.playing = false;

    this.init = this.init.bind(this);
    this.play = this.play.bind(this);
    this.fullscreen = this.fullscreen.bind(this);

    this.init();
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

  init() {
    const that = this;

    this.$progress.slider({
      value: 0,
      max: that.video.duration,
      orientation: 'horizontal',
      range: 'min',
      animate: true,
      start() {
        that.playing = true;
      },
      stop(event, ui) {
        that.video.currentTime = ui.value;
        that.playing = false;
      }
    });

    this.video.volume = 0.5;

    this.video.addEventListener('timeupdate', () => {
      if (!this.playing) this.$progress.slider('value', this.video.currentTime);
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
}

document.querySelectorAll('.video').forEach(video => new Video(video));
