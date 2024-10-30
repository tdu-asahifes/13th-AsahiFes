let touchEnabled = false;
const toggleButton = document.getElementById("toggleTouch");
const googleMaps = document.querySelectorAll(".googleMap");

// 初期状態でタッチ操作を無効にする
googleMaps.forEach((map) => {
    map.style.pointerEvents = "none";
});

toggleButton.onclick = function() {
    touchEnabled = !touchEnabled;
    toggleButton.innerText = touchEnabled ? "タッチ機能\n状態:オン" : "タッチ機能\n状態:オフ";

    // タッチ操作の状態に応じてボタンの色とテキストを変更
    if (touchEnabled) {
        toggleButton.classList.remove("off");
        toggleButton.classList.add("on");
        googleMaps.forEach((map) => map.style.pointerEvents = "auto");
    } else {
        toggleButton.classList.remove("on");
        toggleButton.classList.add("off");
        googleMaps.forEach((map) => map.style.pointerEvents = "none");
    }
};




