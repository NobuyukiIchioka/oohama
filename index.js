document.getElementById('playButton').addEventListener('click', function() {
    var videoPlayer = document.getElementById('videoPlayer');

    // Check if it's a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('sourcePlayer').setAttribute('src', './movie/opening_movie_sp.mp4');
    }

    // Play the video
    videoPlayer.load();
    videoPlayer.play();
});
