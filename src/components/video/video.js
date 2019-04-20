function updateVideo(selector) {
    document.querySelectorAll(selector).forEach(cont => {
        let jcont = $(cont),
            video = cont.querySelector('video'),
            progress = jcont.find('.video-progress');
        
        progress.slider({
            value: 0,
            max: video.duration,
            orientation: "horizontal",
            range: "min",
            animate: true
        });

        video.addEventListener('timeupdate', function() {
            progress.slider('value', video.currentTime);
        });

        video.addEventListener('ended', function() {
            let play = cont.querySelector('.fa-pause');
            if(play) {
                play.className = 'fa fa-play';
            }
        });

        cont.addEventListener('click', (e) => {
            let target = e.target;

            switch(target.className) {
                case 'fa fa-play':
                case 'fa fa-pause':
                    play(video, target);
                    break;
                case 'fa fa-arrows-alt':
                    fullscreen(video);
                    break;
                default:
                    break;
            }

        });
    });

    function play(video, play) {
        if(play.className == 'fa fa-play') {
            video.play();
            play.className = 'fa fa-pause';
        } else if(play.className = 'fa fa-pause') {
            video.pause();
            play.className = 'fa fa-play';
        }
    }

    function fullscreen(video) {
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        if(!state) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
              } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
              } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
              } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
              }
        } else {
            if (video.exitFullscreen) {
                video.exitFullscreen();
              } else if (video.msExitFullscreen) {
                video.msExitFullscreen();
              } else if (video.mozExitFullScreen) {
                video.mozExitFullScreen();
              } else if (video.webkitExitFullscreen) {
                video.webkitExitFullscreen();
              }
        }
    }

};

export default updateVideo;