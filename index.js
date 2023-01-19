// 5秒後に自動遷移(JavaScriptの読み込むテスト用)
// setTimeout(function(){
//     window.location.href = 'https://www.google.com/';
//   }, 3*1000);


/* 1stーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */
// クリックすると
// ①wra1が消える
// ②wra2の中の動画がスタート
const wra1 = document.querySelector('.wrapper1');
const title = document.querySelector('.title');
const movie = document.querySelector('.movie');

// ①,②
title.addEventListener( 'click', function () {
    wra1.classList.add('close');
    movie.play()
} );


/* 2ndーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */
// 動画再生終了後
// ③wra2消える
// ④音楽スタート
const wra2 = document.querySelector('.wrapper2');
const music = document.querySelector('.music');

// ③、④
movie.addEventListener( 'ended', () => {
    wra2.classList.add('close');
    music.play();
  } )


/* 3rdーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */
// ボタンを押すと
// ⑤wra3が消える
// ⑥wra4が出現
const wra3 = document.querySelector('.wrapper3');
const box = document.querySelector('.box');
const wra4 = document.querySelector('.wrapper4');

// ⑤、⑥
box.addEventListener( 'click', function(){
    wra3.classList.add('close');
    wra4.classList.add('open');
    } )


/* 4thーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */


  





