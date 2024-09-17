// /*!
//  * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
//  * Copyright 2013-2023 Start Bootstrap
//  * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
//  */
// // This file is intentionally blank
// // Use this file to add JavaScript to your project

// // scripts.js
// var agreeCheckbox = document.getElementById("agreeCheckbox");
// var ticketLink = document.getElementById("ticketLink");
// var agreeCheckbox2 = document.getElementById("agreeCheckbox2");
// var ticketLink2 = document.getElementById("ticketLink2");
// var agreeCheckbox3 = document.getElementById("agreeCheckbox3");
// var ticketLink3 = document.getElementById("ticketLink3");

// // チェックボックスの状態を監視してリンクのアクティブ/無効を切り替える関数
// function toggleLinkState() {
//   if (agreeCheckbox.checked) {
//     ticketLink.classList.remove("disabled");
//     ticketLink.removeAttribute("disabled");
//   } else {
//     ticketLink.classList.add("disabled");
//     ticketLink.setAttribute("disabled", "true");
//   }
// }

// // チェックボックスの変更イベントを監視してリンクの状態を切り替える
// agreeCheckbox.addEventListener("change", toggleLinkState);

// function toggleLinkState2() {
//   if (agreeCheckbox2.checked) {
//     ticketLink2.classList.remove("disabled");
//     ticketLink2.removeAttribute("disabled");
//   } else {
//     ticketLink2.classList.add("disabled");
//     ticketLink2.setAttribute("disabled", "true");
//   }
// }

// // チェックボックスの変更イベントを監視してリンクの状態を切り替える
// agreeCheckbox2.addEventListener("change", toggleLinkState2);

// function toggleLinkState3() {
//   if (agreeCheckbox3.checked) {
//     ticketLink3.classList.remove("disabled");
//     ticketLink3.removeAttribute("disabled");
//   } else {
//     ticketLink3.classList.add("disabled");
//     ticketLink3.setAttribute("disabled", "true");
//   }
// }

// // チェックボックスの変更イベントを監視してリンクの状態を切り替える
// agreeCheckbox3.addEventListener("change", toggleLinkState3);

// // ページ読み込み時にも初期設定を行う
// toggleLinkState();
// toggleLinkState2();
// toggleLinkState3();

// ticketLink.addEventListener("click", function (event) {
//   if (!agreeCheckbox.checked) {
//     event.preventDefault(); // リンクのデフォルトの動作をキャンセル
//     alert("注意事項に同意してください。");
//   }
// });

// function showModal() {
//   var modal = document.getElementById("modal");
//   modal.style.display = "block";
// }
// function showModal2() {
//   var modal = document.getElementById("modal2");
//   modal.style.display = "block";
// }
// function showModal3() {
//   var modal = document.getElementById("modal3");
//   modal.style.display = "block";
// }

// // モーダルを閉じる関数
// function closeModal() {
//   var modal = document.getElementById("modal");
//   modal.style.display = "none";
// }
// function closeModal2() {
//   var modal = document.getElementById("modal2");
//   modal.style.display = "none";
// }
// function closeModal3() {
//   var modal = document.getElementById("modal3");
//   modal.style.display = "none";
// }

// // チケット購入ボタンがクリックされたときにモーダルを表示
// var ticketButton = document.getElementById("ticketButton");
// var ticketButton2 = document.getElementById("ticketButton2");
// var ticketButton3 = document.getElementById("ticketButton3");
// ticketButton.addEventListener("click", showModal);
// ticketButton2.addEventListener("click", showModal2);
// ticketButton3.addEventListener("click", showModal3);

// // モーダルを閉じるためのイベントリスナーを設定
// var closeSpan = document.getElementsByClassName("close")[0];
// closeSpan.addEventListener("click", closeModal);

// // モーダルの外側をクリックしても閉じるようにする
// window.addEventListener("click", function (event) {
//   var modal = document.getElementById("modal");
//   if (event.target === modal) {
//     closeModal();
//   }
// });
// // モーダルを閉じるためのイベントリスナーを設定
// var closeSpan2 = document.getElementsByClassName("close")[0];
// closeSpan2.addEventListener("click", closeModal2);

// // モーダルの外側をクリックしても閉じるようにする
// window.addEventListener("click", function (event) {
//   var modal = document.getElementById("modal2");
//   if (event.target === modal) {
//     closeModal2();
//   }
// });
// var closeSpan3 = document.getElementsByClassName("close")[0];
// closeSpan3.addEventListener("click", closeModal3);

// // モーダルの外側をクリックしても閉じるようにする
// window.addEventListener("click", function (event) {
//   var modal = document.getElementById("modal3");
//   if (event.target === modal) {
//     closeModal3();
//   }
// });

// const burger = document.querySelector(".burger");
// const nav = document.querySelector(".nav-links");
// const navLinks = document.querySelectorAll(".nav-links li");

// burger.addEventListener("click", () => {
//   //console.log("click");
//   //console.log(navLinks.classList);
//   nav.classList.toggle("nav-active");

//   navLinks.forEach((link, index) => {
//     if (link.style.animation) {
//       link.style.animation = "";
//     } else {
//       // console.log(index);
//       link.style.animation = `navLinksFade 0.5s ease forwards ${
//         index / 7 + 0.4
//       }s`;
//     }
//   });
//   //burger animataion
//   burger.classList.toggle("toggle");
// });



document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementsByClassName("close")[0];
  const ticketLink = document.getElementById("ticketLink");
  const agreeCheckbox = document.getElementById("agreeCheckbox");

  // 各ボタンの設定
  const buttons = [
      { buttonId: "ticketButton", link: "https://tdu.box.com/s/link1" },
      { buttonId: "ticketButton2", link: "https://tdu.box.com/s/link2" },
      { buttonId: "ticketButton3", link: "https://tdu.box.com/s/link3" }
  ];

  // 各ボタンのクリックイベントを設定
  buttons.forEach(function (button) {
      document.getElementById(button.buttonId).addEventListener('click', function () {
          modal.style.display = "block";
          ticketLink.href = button.link;
          ticketLink.style.display = "none";  // 初期状態ではリンクを非表示
          agreeCheckbox.checked = false;  // モーダルを開くたびにチェックを外す
      });
  });

  // チェックボックスの変更イベントを監視
  agreeCheckbox.addEventListener('change', function () {
      if (agreeCheckbox.checked) {
          ticketLink.style.display = "block";  // チェックが入っている場合リンクを表示
      } else {
          ticketLink.style.display = "none";   // チェックが外れている場合リンクを非表示
      }
  });

  // モーダルを閉じる
  closeModal.addEventListener('click', function () {
      modal.style.display = "none";
  });

  // モーダル外をクリックしたら閉じる
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const hiddenElement = document.getElementById('hiddenElement');

  // 初期状態では hiddenElement を非表示にする
  hiddenElement.style.display = 'none';

  // ボタンのクリックイベント
  toggleButton.addEventListener('click', function() {
      if (hiddenElement.style.display === 'none') {
          // hiddenElement が非表示の場合は表示し、ボタンのテキストを "閉じる" に変更
          hiddenElement.style.display = 'block';
          toggleButton.textContent = '閉じる';
      } else {
          // hiddenElement が表示されている場合は非表示にし、ボタンのテキストを "さらに表示する" に戻す
          hiddenElement.style.display = 'none';
          toggleButton.textContent = 'さらに表示する';
      }
  });
});
