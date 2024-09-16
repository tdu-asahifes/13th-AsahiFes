document.querySelectorAll('.left').forEach(elm => {
    elm.onclick = function () {
        let ul = elm.parentNode.querySelector('ul');
        ul.scrollLeft -= ul.clientWidth;
    };
});

document.querySelectorAll('.right').forEach(elm => {
    elm.onclick = function () {
        let ul = elm.parentNode.querySelector('ul');
        ul.scrollLeft += ul.clientWidth;
    };
});


function updateViewarea(ul) {
    const liElements = ul.querySelectorAll('li');
    let viewarea = document.querySelector('.viewarea');
    let ulRect = ul.getBoundingClientRect();

    // 全てのIDを持つ要素からselectクラスを削除
    document.querySelectorAll('[id]').forEach(elm => elm.classList.remove('select'));

    liElements.forEach((li, index) => {
        const liRect = li.getBoundingClientRect();
        const liCenter = (liRect.left + liRect.right) / 2;

        if (liCenter >= ulRect.left && liCenter <= ulRect.right) {
            const id = (index + 1).toString();
            viewarea.textContent = id;
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('select');
            }
        }
    });
}


// スクロールイベントのリスナーを追加
document.querySelector('.hscroll ul').addEventListener('scroll', function () {
    updateViewarea(this);
});

// 初期表示
document.addEventListener('DOMContentLoaded', function () {
    let ul = document.querySelector('.hscroll ul');
    updateViewarea(ul);
});
