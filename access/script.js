const enableTouchButton = document.getElementById('enableTouchButton');
const disableTouchButton = document.getElementById('disableTouchButton');
const iframes = document.querySelectorAll('.mapIframe');

// 初期状態で全てのiframeのタッチ操作を無効にする
iframes.forEach(iframe => {
  iframe.style.pointerEvents = 'none';
});

// 「タッチ操作を有効にする」ボタンのクリックイベント
enableTouchButton.addEventListener('click', function() {
  iframes.forEach(iframe => {
    iframe.style.pointerEvents = 'auto';  // 全てのiframeのタッチ操作を有効にする
  });
});

// 「タッチ操作を無効にする」ボタンのクリックイベント
disableTouchButton.addEventListener('click', function() {
  iframes.forEach(iframe => {
    iframe.style.pointerEvents = 'none';  // 全てのiframeのタッチ操作を無効にする
  });
});
