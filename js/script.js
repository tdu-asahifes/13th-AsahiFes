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



// モーダル表示時に画像を設定する
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // クリックした画像
    var modalImageSrc = button.data('modal-image'); // データ属性からモーダル画像のURLを取得
    var modal = $(this);
    modal.find('#modalImage').attr('src', modalImageSrc); // モーダル内の画像を設定
});

