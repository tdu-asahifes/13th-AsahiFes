/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// scripts.js
var agreeCheckbox = document.getElementById("agreeCheckbox");
var ticketLink = document.getElementById("ticketLink");
var agreeCheckbox2 = document.getElementById("agreeCheckbox2");
var ticketLink2 = document.getElementById("ticketLink2");
var agreeCheckbox3 = document.getElementById("agreeCheckbox3");
var ticketLink3 = document.getElementById("ticketLink3");

// チェックボックスの状態を監視してリンクのアクティブ/無効を切り替える関数
function toggleLinkState() {
  if (agreeCheckbox.checked) {
    ticketLink.classList.remove("disabled");
    ticketLink.removeAttribute("disabled");
  } else {
    ticketLink.classList.add("disabled");
    ticketLink.setAttribute("disabled", "true");
  }
}

// チェックボックスの変更イベントを監視してリンクの状態を切り替える
agreeCheckbox.addEventListener("change", toggleLinkState);

function toggleLinkState2() {
  if (agreeCheckbox2.checked) {
    ticketLink2.classList.remove("disabled");
    ticketLink2.removeAttribute("disabled");
  } else {
    ticketLink2.classList.add("disabled");
    ticketLink2.setAttribute("disabled", "true");
  }
}

// チェックボックスの変更イベントを監視してリンクの状態を切り替える
agreeCheckbox2.addEventListener("change", toggleLinkState2);

function toggleLinkState3() {
  if (agreeCheckbox3.checked) {
    ticketLink3.classList.remove("disabled");
    ticketLink3.removeAttribute("disabled");
  } else {
    ticketLink3.classList.add("disabled");
    ticketLink3.setAttribute("disabled", "true");
  }
}

// チェックボックスの変更イベントを監視してリンクの状態を切り替える
agreeCheckbox3.addEventListener("change", toggleLinkState3);

// ページ読み込み時にも初期設定を行う
toggleLinkState();
toggleLinkState2();
toggleLinkState3();

ticketLink.addEventListener("click", function (event) {
  if (!agreeCheckbox.checked) {
    event.preventDefault(); // リンクのデフォルトの動作をキャンセル
    alert("注意事項に同意してください。");
  }
});

function showModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}
function showModal2() {
  var modal = document.getElementById("modal2");
  modal.style.display = "block";
}
function showModal3() {
  var modal = document.getElementById("modal3");
  modal.style.display = "block";
}

// モーダルを閉じる関数
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
function closeModal2() {
  var modal = document.getElementById("modal2");
  modal.style.display = "none";
}
function closeModal3() {
  var modal = document.getElementById("modal3");
  modal.style.display = "none";
}

// チケット購入ボタンがクリックされたときにモーダルを表示
var ticketButton = document.getElementById("ticketButton");
var ticketButton2 = document.getElementById("ticketButton2");
var ticketButton3 = document.getElementById("ticketButton3");
ticketButton.addEventListener("click", showModal);
ticketButton2.addEventListener("click", showModal2);
ticketButton3.addEventListener("click", showModal3);

// モーダルを閉じるためのイベントリスナーを設定
var closeSpan = document.getElementsByClassName("close")[0];
closeSpan.addEventListener("click", closeModal);

// モーダルの外側をクリックしても閉じるようにする
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});
// モーダルを閉じるためのイベントリスナーを設定
var closeSpan2 = document.getElementsByClassName("close")[0];
closeSpan2.addEventListener("click", closeModal2);

// モーダルの外側をクリックしても閉じるようにする
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal2");
  if (event.target === modal) {
    closeModal2();
  }
});
var closeSpan3 = document.getElementsByClassName("close")[0];
closeSpan3.addEventListener("click", closeModal3);

// モーダルの外側をクリックしても閉じるようにする
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal3");
  if (event.target === modal) {
    closeModal3();
  }
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  //console.log("click");
  //console.log(navLinks.classList);
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  //burger animataion
  burger.classList.toggle("toggle");
});