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
  if (days > 0) {
    // カウントダウンが0日以上の場合
    document.querySelector(".days").innerText = days;
  } else if (days === 0 || days === -1) {
    // 0日または-1日になった場合
    document.getElementById("countdown").innerHTML = "旭祭当日!!";
  } else if (days <= -2) {
    // -2日以降の場合
    document.getElementById("countdown").innerHTML = "旭祭は終了しました";
  }
  setInterval(countdown, 1000);
}


  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide(); // メニューを閉じる
    });
  });
