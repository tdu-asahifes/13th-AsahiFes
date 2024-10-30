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

document.querySelectorAll(".navbar-nav .nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide(); // メニューを閉じる
  });
});

function modalOpen(kikakuId) {
  //------------------------------------------------------------
  //  モーダルウインドウ オープン
  //------------------------------------------------------------
  document.getElementById("modalArea1").className = "modalBg modalBgOpen";
  changeText(kikakuId);
  console.log(kikakuId);
}

function modalClose() {
  //------------------------------------------------------------
  //  モーダルウインドウ クローズ
  //------------------------------------------------------------
  document.getElementById("modalArea1").className = "modalBg modalBgClose";
}

// JavaScriptファイル (script.js) 内のコード

// テキストを書き換える関数
function changeText(kikakuId) {
  // idが"target"の要素を取得
  var targetElement = document.getElementById("target");
  console.log(kikakuId);

  // テキストを新しい内容に書き換える

  if (kikakuId == "furugi") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/furugisyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "fureai") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/fureaisyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "1nen") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/1nensyousai.png">';

    // モーダルを表示
    var myModal = new bootstrap.Modal(document.getElementById("popupModal"));
    myModal.show();
  }
}

document.querySelectorAll(".navbar-nav .nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide(); // メニューを閉じる
  });
});

function modalOpen(kikakuId) {
  //------------------------------------------------------------
  //  モーダルウインドウ オープン
  //------------------------------------------------------------
  document.getElementById("modalArea1").className = "modalBg modalBgOpen";
  changeText(kikakuId);
  console.log(kikakuId);
}

function modalClose() {
  //------------------------------------------------------------
  //  モーダルウインドウ クローズ
  //------------------------------------------------------------
  document.getElementById("modalArea1").className = "modalBg modalBgClose";
}

// JavaScriptファイル (script.js) 内のコード

// テキストを書き換える関数
function changeText(kikakuId) {
  // idが"target"の要素を取得
  var targetElement = document.getElementById("target");
  console.log(kikakuId);

  // テキストを新しい内容に書き換える

  if (kikakuId == "furugi") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/furugisyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "fureai") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/fureaisyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "1nen") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/1nensyousai.png">';

    console.log(kikakuId);
  } else if (kikakuId == "kodomo") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/kodomosyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "yatai") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/yataisyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "stamp") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/stampsyousai.png">';
    console.log(kikakuId);
  } else if (kikakuId == "yatai") {
    targetElement.innerHTML =
      '<img class="modalimg" src="images/kikaku/yataisyousai.png">';
    console.log(kikakuId);
  }
}

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
