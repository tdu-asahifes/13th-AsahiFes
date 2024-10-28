document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = 0;
  let images = [];

  // モーダルを開くボタンのクリックイベントを設定
  document.querySelectorAll(".modal-button").forEach((button) => {
    button.addEventListener("click", function () {
      images = button.getAttribute("data-images").split(",");
      currentImageIndex = 0;
      const modalImage = document.getElementById("galleryImage");
      modalImage.src = images[currentImageIndex]; // 最初の画像を表示
    });
  });

  // モーダルウィンドウ内の画像クリックイベント
  document
    .getElementById("galleryImage")
    .addEventListener("click", function () {
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

// モーダル背景をクリックした時にモーダルを閉じる処理
document.addEventListener("click", function (event) {
  // モーダルの外側をクリックしたときのみ閉じる
  var modal = document.getElementById("popupModal");
  if (event.target === modal) {
    var bootstrapModal = bootstrap.Modal.getInstance(modal); // Bootstrapのモーダルインスタンスを取得
    bootstrapModal.hide(); // モーダルを閉じる
  }
});

function openPopup(element) {
  // data-popup-url属性からURLを取得
  var url = element.getAttribute("data-popup-url");
  // iframeに取得したURLを設定
  document.getElementById("externalContent").src = url;

  // モーダルを表示
  var myModal = new bootstrap.Modal(document.getElementById("popupModal"));
  myModal.show();
}
