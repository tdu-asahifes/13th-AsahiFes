document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementsByClassName("close")[0];
  const ticketLink = document.getElementById("ticketLink");
  const modalTitle = document.getElementById("modalTitle");
  const agreeCheckbox = document.getElementById("agreeCheckbox");

  // 各ボタンの設定
  const buttons = [
    {
      buttonId: "ticketButton",
      link: "https://tdu.app.box.com/s/5skpzp06fdsb2f3kjdw9ra9ee08mxms0",
      title: "学内向け",
    },
    {
      buttonId: "ticketButton2",
      link: "https://eplus.jp/sf/detail/4192720001-P0030001",
      title: "一般向け",
    },
    {
      buttonId: "ticketButton3",
      link: "https://eplus.jp/sf/detail/4192720001-P0030001",
      title: "一般向け",
    },
  ];

  // 各ボタンのクリックイベントを設定
  buttons.forEach(function (button) {
    document
      .getElementById(button.buttonId)
      .addEventListener("click", function () {
        modal.style.display = "block";
        ticketLink.href = button.link;
        modalTitle.textContent = button.title;  // モーダルのタイトルを設定
        ticketLink.style.display = "none"; // 初期状態ではリンクを非表示
        agreeCheckbox.checked = false; // モーダルを開くたびにチェックを外す
      });
  });

  // チェックボックスの変更イベントを監視
  agreeCheckbox.addEventListener("change", function () {
    if (agreeCheckbox.checked) {
      ticketLink.style.display = "block"; // チェックが入っている場合リンクを表示
    } else {
      ticketLink.style.display = "none"; // チェックが外れている場合リンクを非表示
    }
  });

  // モーダルを閉じる
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // モーダル外をクリックしたら閉じる
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const hiddenElement = document.getElementById("hiddenElement");

  // 初期状態では hiddenElement を非表示にする
  hiddenElement.style.display = "none";

  // ボタンのクリックイベント
  toggleButton.addEventListener("click", function () {
    if (hiddenElement.style.display === "none") {
      // hiddenElement が非表示の場合は表示し、ボタンのテキストを "閉じる" に変更
      hiddenElement.style.display = "block";
      toggleButton.textContent = "閉じる";
    } else {
      // hiddenElement が表示されている場合は非表示にし、ボタンのテキストを "さらに表示する" に戻す
      hiddenElement.style.display = "none";
      toggleButton.textContent = "さらに表示する";
    }
  });
});
