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
const musicContainer = document.querySelector('header');
const wra4 = document.querySelector('.wrapper4');

// ⑥、⑦、⑧、⑨、⑩
wra3_con.addEventListener( 'click', function(){
    wra2.classList.add('close');
    wra3.classList.add('close');
    wra3_con.classList.remove('open');
    box.classList.remove('open');
    musicContainer.style.display = 'block';
    music.play();
    wra4.classList.add('open');
    } )


/* 4thーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */
// 透明BOXにホバーすると
// 11.BOX1に色が変わる
// 12.BOX2に色が変わる
// 13.BOX3に色が変わる
// 14.GIFアニメ


const bor1 = document.querySelector('.border1');
const bor2 = document.querySelector('.border2');
const bor3 = document.querySelector('.border3');
const img_list = ["img/gif1.png", "img/gif2.png"];
let count = -1;

// 11.ホバーイベント
bor1.addEventListener('mouseover', () => {
    bor1.style.background = 'red';
}, false);
// 離れた処理
bor1.addEventListener('mouseleave', () => {
    bor1.style.background = 'none';
}, false);
  
// 12.ホバーイベント
bor2.addEventListener('mouseover', () => {
    bor2.style.background = 'blue';
}, false);
// 離れた処理
bor2.addEventListener('mouseleave', () => {
    bor2.style.background = 'none';
}, false);

// 13.ホバーイベント
bor3.addEventListener('mouseover', () => {
    bor3.style.background = 'green';
}, false);
// 離れた処理
bor3.addEventListener('mouseleave', () => {
    bor3.style.background = 'none';
}, false);

/**
 * 朝/昼/夜
 */
function switchPageForTime() {
    
    // Key=表示開始時刻(Hour)
    const toHourUrls = [
        [0, 'https://neibe-stripe.com/WordPress/hfcontent/night/'],
        [6, 'https://neibe-stripe.com/WordPress/hfcontent/morning/'],
        [12, 'https://neibe-stripe.com/WordPress/hfcontent/afternoon/'],
        [18, 'https://neibe-stripe.com/WordPress/hfcontent/night/'],
    ]

    const hours = new Date().getHours();
    const viewHours = toHourUrls.reduce((pre, [startHours]) => {
        if (hours >= startHours) {
            return startHours;
        }
        return pre;
    }, toHourUrls[0][0]);
    const [,url] = toHourUrls.find(([startHours]) => startHours === viewHours);
    const iframePage = document.querySelector('.wrapper4 iframe');
    iframePage.src = url;
}
switchPageForTime();




// 14.
GIF1(); // 関数を実行
function GIF1() {
    count++;
    // カウントが最大になれば配列を初期値に戻すため「0」を指定する
    if (count == img_list.length) count = 0;
    // 画像選択
    document.querySelector(".gif1").src = img_list [count];
    // 1秒ごとに実行
    setTimeout("GIF1()", 1000);
}

