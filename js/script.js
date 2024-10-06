document.addEventListener('DOMContentLoaded', function () {
  let currentImageIndex = 0;
  let images = [];

  // モーダルを開くボタンのクリックイベントを設定
  document.querySelectorAll('.modal-button').forEach(button => {
    button.addEventListener('click', function () {
      images = button.getAttribute('data-images').split(',');
      currentImageIndex = 0;
      const modalImage = document.getElementById('galleryImage');
      modalImage.src = images[currentImageIndex]; // 最初の画像を表示
    });
  });

  // モーダルウィンドウ内の画像クリックイベント
  document.getElementById('galleryImage').addEventListener('click', function () {
    if (images.length > 0) {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      this.src = images[currentImageIndex];
    }
  });
});
function countdown() {
  const targetDate = new Date("November 2, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  document.querySelector(".days").innerText = days;

  if (timeRemaining < 0) {
    document.getElementById("countdown").innerHTML = "カウントダウン終了";
  }
}

setInterval(countdown, 1000);



document.querySelectorAll('.navbar-nav .nav-link').forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide(); // メニューを閉じる
  });
});

function updateCurrentTimeLine() {
  const Now = new Date();
  const hours = Now.getHours();
  const minutes = Now.getMinutes();
  let DAY = Now.getDate();
  const totalMinutes = hours * 60 + minutes;
  const timetableHeight = 840; //タイムテーブルの高さ
  const startTime = 10 * 60; // 10:00の分数
  const endTime = 17 * 60; // 17:00の分数

  const currentTimeLine = document.getElementById('currentTimeLine');
  
  if (totalMinutes >= startTime && totalMinutes <= endTime &&DAY == 2) {
    const currentPosition = ((totalMinutes - startTime) / (endTime - startTime)) * timetableHeight; // 現在位置計算
    currentTimeLine.style.top = `${currentPosition}px`;
    currentTimeLine.innerHTML = (hours+":"+minutes);
    currentTimeLine.style.display = 'block';
  } else {
    currentTimeLine.style.display = 'none'; // 時間外はラインを非表示
  }
}

// 初期表示時にラインを設定
updateCurrentTimeLine();
// 1分ごとに更新
setInterval(updateCurrentTimeLine, 60000);

function updateCurrentTimeLine2() {
  const Now = new Date();
  const hours = Now.getHours();
  const minutes = Now.getMinutes();
  let DAY = Now.getDate();
  const totalMinutes = hours * 60 + minutes;
  const timetableHeight = 840; // タイムテーブルの高さ
  const startTime = 10 * 60; // 10:00の分数
  const endTime = 17 * 60; // 17:00の分数

  const currentTimeLine2 = document.getElementById('currentTimeLine2');

  if (totalMinutes >= startTime && totalMinutes <= endTime && DAY == 3) {
    const currentPosition = ((totalMinutes - startTime) / (endTime - startTime)) * timetableHeight; // 現在位置計算
    currentTimeLine2.style.top = `${currentPosition}px`;
    currentTimeLine2.innerHTML = (hours+":"+minutes);
    currentTimeLine2.style.display = 'block';
  } else {
    currentTimeLine2.style.display = 'none'; // 時間外はラインを非表示
  }
}

// 初期表示時にラインを設定
updateCurrentTimeLine2();
// 1分ごとに更新
setInterval(updateCurrentTimeLine2, 60000);

function updateCurrentTimeLineSpe1() {
  const Now = new Date();
  const hours = Now.getHours();
  const minutes = Now.getMinutes();
  let DAY = Now.getDate();
  const totalMinutes = hours * 60 + minutes;
  const timetableHeight = 600; //タイムテーブルの高さ
  const startTime = 10 * 60; // 10:00の分数
  const endTime = 15 * 60; // 17:00の分数

  const currentTimeLine = document.getElementById('currentTimeLineSpe1');
  
  if (totalMinutes >= startTime && totalMinutes <= endTime &&DAY == 2) {
    const currentPosition = ((totalMinutes - startTime) / (endTime - startTime)) * timetableHeight; // 現在位置計算
    currentTimeLine.style.top = `${currentPosition}px`;
    currentTimeLine.innerHTML = (hours+":"+minutes);
    currentTimeLine.style.display = 'block';
  } else {
    currentTimeLine.style.display = 'none'; // 時間外はラインを非表示
  }
}

// 初期表示時にラインを設定
updateCurrentTimeLineSpe1();
// 1分ごとに更新
setInterval(updateCurrentTimeLineSpe1, 60000);

function updateCurrentTimeLineSpe2() {
  const Now = new Date();
  const hours = Now.getHours();
  const minutes = Now.getMinutes();
  let DAY = Now.getDate();
  const totalMinutes = hours * 60 + minutes;
  const timetableHeight = 600; //タイムテーブルの高さ
  const startTime = 10 * 60; // 10:00の分数
  const endTime = 15 * 60; // 17:00の分数

  const currentTimeLine = document.getElementById('currentTimeLineSpe2');
  
  if (totalMinutes >= startTime && totalMinutes <= endTime &&DAY == 3) {
    const currentPosition = ((totalMinutes - startTime) / (endTime - startTime)) * timetableHeight; // 現在位置計算
    currentTimeLine.style.top = `${currentPosition}px`;
    currentTimeLine.innerHTML = (hours+":"+minutes);
    currentTimeLine.style.display = 'block';
  } else {
    currentTimeLine.style.display = 'none'; // 時間外はラインを非表示
  }
}

// 初期表示時にラインを設定
updateCurrentTimeLineSpe2();
// 1分ごとに更新
setInterval(updateCurrentTimeLineSpe2, 60000);
