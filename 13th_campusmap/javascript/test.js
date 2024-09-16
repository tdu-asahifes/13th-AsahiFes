// 最初に表示するdivの番号
let initialDiv = 15;

// ページ読み込み時に最初のdivを表示
window.onload = function () {
    toggleDiv(initialDiv);
    const targetDiv = document.getElementById(`div${initialDiv}`);
    if (targetDiv) {
        targetDiv.classList.remove('hidden');
        generateList(targetDiv);
    }
};

// 押されたフロアのマップを表示する
function toggleDiv(divNumber) {
    // 全てのdivを非表示にする
    for (let i = 1; i <= 15; i++) {
        const div = document.getElementById(`div${i}`);
        if (div) {
            div.classList.add('hidden');
        }
    }

    // クリックされたボタンに対応するdivを表示する
    const targetDiv = document.getElementById(`div${divNumber}`);
    if (targetDiv) {
        targetDiv.classList.remove('hidden');
        generateList(targetDiv);
    }
}

// クリックされたボタンの色を変える（今何階かを表示する）
function changeColor(button) {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(btn => {
        if (btn === button) {
            btn.classList.toggle('click');
        } else {
            btn.classList.remove('click');
        }
    });
}

const apiURL = 'https://script.google.com/macros/s/AKfycbxgQHZFVfbwajL3Pbc3lRIgZQw0SYW2KqnPThPq0WZvrm7vkXbMnirF6cfUQT5YUOza/exec';
const dynamicList = document.getElementById('dynamicList');

async function loadData(roomnumberInput) {
    const response = await fetch(apiURL);
    const data = await response.json();

    const matchingEntry = data.find(entry => entry.roomnumber === roomnumberInput);

    if (matchingEntry) {
        const baseHtml = document.querySelector('.spreadsheets--item.js-base');
        const spreadsheets = document.querySelector('.spreadsheets');

        // 既存のリストをクリア
        while (spreadsheets.children.length > 1) {
            spreadsheets.removeChild(spreadsheets.lastChild);
        }

        const copy = baseHtml.cloneNode(true);
        copy.classList.remove('js-base');
        copy.querySelector('.spreadsheets--building').textContent = matchingEntry.building;
        copy.querySelector('.spreadsheets--roomnumber').textContent = matchingEntry.roomnumber;
        copy.querySelector('.spreadsheets--organizationname').textContent = matchingEntry.organizationname;
        copy.querySelector('.spreadsheets--exprain').innerHTML = matchingEntry.exprain;
        copy.querySelector('.spreadsheets--janl').src = matchingEntry.janl;
        copy.querySelector('.spreadsheets--date').src = matchingEntry.date;
        spreadsheets.appendChild(copy);
    } else {
        alert('該当する部屋番号が見つかりませんでした。');
    }
}

function description(clickedElement) {
    const gTag = clickedElement.querySelector('g');

    if (gTag) {
        const dataName = gTag.getAttribute('data-name');
        console.log('クリックされた<a>要素内の<g>タグのdata-name属性は:', dataName);

        loadData(dataName);
    } else {
        console.log('クリックされた<a>要素内に<g>タグが見つかりませんでした。');
    }
}

// 表示されているdiv内のgタグからデータを取得してリストを生成
async function generateList(targetDiv) {
    const response = await fetch(apiURL);
    const data = await response.json();

    // 既存のリストをクリア
    dynamicList.innerHTML = '';

    targetDiv.querySelectorAll('g[data-name]').forEach(gTag => {
        const dataName = gTag.getAttribute('data-name');
        const matchingEntry = data.find(entry => entry.roomnumber === dataName);

        if (matchingEntry) {
            const li = document.createElement('li');
            li.className = 'text-center';
            li.setAttribute('data-roomnumber', matchingEntry.roomnumber);
            li.innerHTML = `
                <div class="border border-5 rounded shadow m-3">
                    <p class="spreadsheets--organizationname">${matchingEntry.organizationname}</p>
                </div>
            `;
            dynamicList.appendChild(li);
        }
    });
}

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
    let ulRect = ul.getBoundingClientRect();

    document.querySelectorAll('g').forEach(gTag => gTag.classList.remove('select'));

    liElements.forEach(li => {
        const liRect = li.getBoundingClientRect();
        const liCenter = (liRect.left + liRect.right) / 2;

        if (liCenter >= ulRect.left && liCenter <= ulRect.right) {
            const roomnumber = li.getAttribute('data-roomnumber');
            const gTag = document.querySelector(`g[data-name="${roomnumber}"]`);
            if (gTag) {
                gTag.classList.add('select');
            }
        }
    });
}

// スクロールイベントのリスナーを追加
document.querySelector('.hscroll ul').addEventListener('scroll', function () {
    updateViewarea(this);
});
document.addEventListener('DOMContentLoaded', function () {
    let ul = document.querySelector('.hscroll ul');
    updateViewarea(ul);
    generateList();
});