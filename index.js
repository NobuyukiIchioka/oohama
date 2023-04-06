// header
    // 動画コントローラー
    // ビデオ、アイコン画像、ボリュームを取得
    const video = document.querySelector("video");
    const mute_icon = document.getElementById("icon");
    const volume_slider = document.getElementById("volume");
    
    // ボリュームの初期設定
    video.volume = volume_slider.value;
    // 消音ボタンの画像を切り替え
    mute_icon.onclick = function() {
        if(video.muted){
            video.muted = false;
            icon.src = "./img/volume-high.svg";
        }else{
            video.muted = true;
            icon.src = "./img/volume-mute.svg";
        }
    }
    // 音量調整スライダーを操作したとき
    volume_slider.addEventListener("input", (e) => {
        video.volume = volume_slider.value;
      });

    // 音楽コントローラー
    // 音楽、再生画像、音量画像、ボリュームを取得
    const audio = document.querySelector(".music");
    const play = document.getElementById("play");
    const icon2 = document.getElementById("icon2");

    
    // play.onclick = function() {
    //     if(audio.paused){
    //         audio.play();
    //         play.src = "./img/pause.svg";
    //     } else {
    //         audio.pause();
    //         play.src = "./img/play.svg";
    //     }
    // }

    // play.addEventListener("click", togglePlay);



    // function togglePlay() {
    //     if (isPlaying) {
    //       audio.pause();
    //       play.querySelector('img').src = "./img/play.svg";
    //     } else {
    //       audio.play();
    //       play.querySelector('img').src = "./img/pause.svg";
    //     }
    //     isPlaying = !isPlaying;
    //   }
      
    //   play.addEventListener("click", togglePlay);




    






/* 2ndーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */
// 動画再生終了後
// ③wra3が出現
// ④wra3コンテナが出現
// ⑤ボックスが出現
const movie = document.querySelector('.movie');
const wra3 = document.querySelector('.wrapper3');
const wra3_con = document.querySelector('.wra3_container');
const box = document.querySelector('.box');

// ③、④、⑤
movie.addEventListener( 'ended', () => {
    wra3.classList.add('open');
    wra3_con.classList.add('open');
    box.classList.add('open');
  } )

wra3_con.addEventListener( 'click', function(){
    window.location.href = "./3.html"
} ); 


