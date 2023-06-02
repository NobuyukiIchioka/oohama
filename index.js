      // STARTボタンで動画スタート
      document.getElementById('playButton').addEventListener('click', function() {
        let videoDesktop = document.querySelector(".movie");
        let videoMobile = document.querySelector(".movie_sp");
    
        // This matches your media query
        const isMobile = window.matchMedia("(max-width: 825px)");
    
        // check if it's a mobile screen
        if (isMobile.matches) {
          videoMobile.load();
          videoMobile.play();
        } else {
          videoDesktop.load();
          videoDesktop.play();
        }
      });

    // header
    const videos = document.querySelectorAll("video");
    const mute_icon = document.getElementById("icon");
    const volume_slider = document.getElementById("volume");
    
    // ボリュームの初期設定、PCとSPの両方のvideoタグの情報を認識できる設定
    videos.forEach(video => {
        video.volume = volume_slider.value;
    });

    // 消音ボタンの画像を切り替え
    mute_icon.onclick = function() {
        videos.forEach(video => {
            if(video.muted){
                video.muted = false;
                icon.src = "./img/volume-high.svg";
            }else{
                video.muted = true;
                icon.src = "./img/volume-mute.svg";
            }
        });
    }

    // 音量調整スライダーを操作したとき
    volume_slider.addEventListener("input", (e) => {
        videos.forEach(video => {
            video.volume = volume_slider.value;
        });
    });
