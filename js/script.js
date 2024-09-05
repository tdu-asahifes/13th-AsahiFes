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
