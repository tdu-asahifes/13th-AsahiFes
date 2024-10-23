let touchEnabled = false;
const toggleButton = document.getElementById("toggleTouch");
const googleMaps = document.querySelectorAll(".googleMap"); // すべてのGoogle Maps iframeを取得

// 初期状態でタッチ操作を無効にする
googleMaps.forEach((map) => {
    map.style.pointerEvents = "none"; // タッチ操作を無効にする
});

toggleButton.onclick = function() {
    touchEnabled = !touchEnabled; // タッチ操作の状態をトグル
    toggleButton.innerText = touchEnabled ? "タッチ操作をオフにする" : "タッチ操作をオンにする";

    // すべてのGoogle Maps iframeに対してタッチ操作を有効または無効にする
    googleMaps.forEach((map) => {
        if (touchEnabled) {
            map.style.pointerEvents = "auto"; // タッチ操作を有効にする
        } else {
            map.style.pointerEvents = "none"; // タッチ操作を無効にする
        }
    });
};



