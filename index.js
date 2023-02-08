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
// ③wra3が出現
// ④wra3コンテナが出現
// ⑤ボックスが出現
const wra3 = document.querySelector('.wrapper3');
const wra3_con = document.querySelector('.wra3_container');
const box = document.querySelector('.box');

// ③、④、⑤
movie.addEventListener( 'ended', () => {
    wra3.classList.add('open');
    wra3_con.classList.add('open');
    box.classList.add('open');
  } )


/* 3rdーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */
// wra3コンテナを押すと
// ⑥wra2が消える
// ⑦wra3が消える
// ⑦wra3コンテナが消える
// ⑧ボックスが消える
// ⑨音楽スタート
// ⑩wra4が出現
const wra2 = document.querySelector('.wrapper2');
const music = document.querySelector('.music');
const wra4 = document.querySelector('.wrapper4');

// ⑥、⑦、⑧、⑨、⑩
wra3_con.addEventListener( 'click', function(){
    wra2.classList.add('close');
    wra3.classList.add('close');
    wra3_con.classList.remove('open');
    box.classList.remove('open');
    music.play();
    wra4.classList.add('open');
    } )


/* 4thーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */


  





