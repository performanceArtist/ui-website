function updateVideo() {
    document.querySelectorAll('.video').forEach(cont => {
        let jcont = $(cont),
            video = cont.querySelector('video'),
            progress = jcont.find('.video-progress'),
            moving = false;
        
        progress.slider({
            value: 0,
            max: video.duration,
            orientation: "horizontal",
            range: "min",
            animate: true,
            start: function(event, ui) {
                moving = true;
            },
            stop: function(event, ui) {
                video.currentTime = ui.value;
                moving = false;
            }
        });

        video.volume = 0.5;

        video.addEventListener('timeupdate', function() {
            if(!moving) progress.slider('value', video.currentTime);
        });

        video.addEventListener('ended', function() {
            let play = cont.querySelector('.fa-pause');
            if(play) {
                play.className = 'fa fa-play';
            }
        });

        cont.querySelector('.fullscreen').addEventListener('click', function(e) {
            fullscreen(video);
        });

        cont.querySelector('.play').addEventListener('click', function(e) {
            let icon = this.querySelector('button i');
            play(video, icon);
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
        }
    }

};

export default updateVideo;