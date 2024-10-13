document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    let images = [];

    // モーダルを開くボタンのクリックイベントを設定
    document.querySelectorAll('.modal-button').forEach(button => {
        button.addEventListener('click', function() {
            images = button.getAttribute('data-images').split(',');
            currentImageIndex = 0;
            const modalImage = document.getElementById('galleryImage');
            modalImage.src = images[currentImageIndex]; // 最初の画像を表示
        });
    });

    // モーダルウィンドウ内の画像クリックイベント
    document.getElementById('galleryImage').addEventListener('click', function() {
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

// DOM要素を取得
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const iframe = document.querySelector('.popup-iframe');
const closePopupButton = document.getElementById('close-popup');
const popupContent = document.getElementById('popup-content');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0; // 現在のインデックス
let urls = []; // 現在のボタンのURLリスト

// ボタンのクリックイベントを設定
document.querySelectorAll('a[id^="button-link"]').forEach((button) => {
    button.addEventListener('click', function () {
        currentIndex = 0; // インデックスをリセット

        // data-popup-content属性の内容を取得
        const content = this.getAttribute('data-popup-content');
        popupContent.innerHTML = `<h3>${content}</h3>`; // ポップアップに内容を設定

        // data-popup-urls属性の内容を取得し、カンマで分割して配列にする
        urls = this.getAttribute('data-popup-urls').split(',');

        // iframeのURLを設定
        iframe.src = urls[currentIndex];
        prevButton.disabled = currentIndex === 0; // 前ボタンの有効/無効を更新
        nextButton.disabled = currentIndex === urls.length - 1; // 次ボタンの有効/無効を更新

        overlay.style.display = 'block'; // オーバーレイを表示
        popup.style.display = 'block'; // ポップアップを表示
    });
});

// 前ボタン、次ボタンのイベントなどは前述のコードと同じ


// 前ボタンのクリックイベントを設定
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
      currentIndex--; // インデックスをデクリメント
      updateIframe(); // iframeを更新
  }
});

// 次ボタンのクリックイベントを設定
nextButton.addEventListener('click', () => {
  if (currentIndex < urls.length - 1) {
      currentIndex++; // インデックスをインクリメント
      updateIframe(); // iframeを更新
  }
});

// iframeを更新する関数
function updateIframe() {
  iframe.src = urls[currentIndex]; // iframeのURLを設定
  prevButton.disabled = currentIndex === 0; // 前ボタンの有効/無効を更新
  nextButton.disabled = currentIndex === urls.length - 1; // 次ボタンの有効/無効を更新
}

// ポップアップを閉じる
closePopupButton.addEventListener('click', () => {
  overlay.style.display = 'none'; // オーバーレイを非表示
  popup.style.display = 'none'; // ポップアップを非表示
  iframe.src = ''; // iframeのURLをクリア
});

// 背景をクリックしたときにポップアップを閉じる
overlay.addEventListener('click', () => {
  overlay.style.display = 'none'; // オーバーレイを非表示
  popup.style.display = 'none'; // ポップアップを非表示
  iframe.src = ''; // iframeのURLをクリア
});