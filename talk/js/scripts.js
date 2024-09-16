
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

