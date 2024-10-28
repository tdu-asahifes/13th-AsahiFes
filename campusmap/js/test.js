const apiURL = 'https://script.google.com/macros/s/AKfycby6J9KJT7BUHUu57kryocsV9OuWv0l3ZXlnIANDv5lFRgk7o0MPl7HHm2wd9TPUGgDyuA/exec';
let cachedData = null;  // データのキャッシュ
let initialDiv = 1;  // 最初に表示するdivの番号
let isFirstLoad = true;  // 初回ロード用フラグ

window.onload = async function () {
    await fetchData();
    toggleDiv(initialDiv);

    const targetDiv = document.getElementById(`div${initialDiv}`);
    if (targetDiv) {
        targetDiv.classList.remove('hidden');
        generateList(targetDiv);
    }

    let ul = document.querySelector('.hscroll ul');
    updateViewarea(ul);
    isFirstLoad = false;  // 初回ロード終了
};

// データを取得してキャッシュに保存
async function fetchData() {
    const response = await fetch(apiURL);
    cachedData = await response.json();
}

// 押されたフロアのマップを表示する
function toggleDiv(divNumber) {
    for (let i = 1; i <= 15; i++) {
        const div = document.getElementById(`div${i}`);
        if (div) {
            div.classList.add('hidden');
        }
    }
    const targetDiv = document.getElementById(`div${divNumber}`);
    if (targetDiv) {
        targetDiv.classList.remove('hidden');
        generateList(targetDiv);
    }
}

async function generateList(targetDiv) {
    if (!cachedData) await fetchData();
    dynamicList.innerHTML = '';

    targetDiv.querySelectorAll('g[data-name]').forEach(gTag => {
        const dataName = gTag.getAttribute('data-name');
        const matchingEntry = cachedData.find(entry => entry.roomnumber === dataName);

        if (matchingEntry) {
            const li = document.createElement('li');
            li.className = 'text-center';
            li.setAttribute('data-roomnumber', matchingEntry.roomnumber);

            li.innerHTML = `
                <div class="border border-5 rounded shadow m-3 scroll-bgcolor">
                    <a href="javascript:void(0)" class="organization-link">
                        <p class="spreadsheets--organizationname">${matchingEntry.organizationname}</p>
                    </a>
                </div>
            `;

            li.querySelector('.organization-link').addEventListener('click', () => {
                loadData(matchingEntry.roomnumber);
            });

            dynamicList.appendChild(li);
        }
    });

    if (isFirstLoad) {
        setTimeout(() => {
            let ul = document.querySelector('.hscroll ul');
            updateViewarea(ul);
        }, 0);
    }
}

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

// 左右スクロール
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

// スクロールイベントリスナー追加
document.querySelector('.hscroll ul').addEventListener('scroll', function () {
    if (!isFirstLoad) {
        updateViewarea(this);
    }
});

const dynamicList = document.getElementById('dynamicList');

// モーダル表示用のデータ読み込み
async function loadData(roomnumberInput) {
    const matchingEntry = cachedData.find(entry => entry.roomnumber === roomnumberInput);

    if (matchingEntry) {
        const baseHtml = document.querySelector('.spreadsheets--item.js-base');
        const spreadsheets = document.querySelector('.spreadsheets');

        // 既存のリストをクリア
        while (spreadsheets.children.length > 1) {
            spreadsheets.removeChild(spreadsheets.lastChild);
        }

        const copy = baseHtml.cloneNode(true);
        copy.classList.remove('js-base');
        copy.querySelector('.spreadsheets--roomnumber').textContent = matchingEntry.roomnumber;
        copy.querySelector('.spreadsheets--organizationname').textContent = matchingEntry.organizationname;
        copy.querySelector('.spreadsheets--exprain').innerHTML = matchingEntry.exprain;
        copy.querySelector('.spreadsheets--janl').textContent = matchingEntry.janl;
        copy.querySelector('.spreadsheets--date').textContent = matchingEntry.date;
        spreadsheets.appendChild(copy);

        const modal = new bootstrap.Modal(document.getElementById('dataModal'));
        modal.show();
    } 
    // else {
    //     alert('該当する部屋番号が見つかりませんでした。');
    // }
}

// マップ内の要素をタッチしてモーダルを表示
function description(clickedElement) {
    const gTag = clickedElement.querySelector('g');

    if (gTag) {
        const dataName = gTag.getAttribute('data-name');
        loadData(dataName);
     } 
    //  else {
    //     console.log('クリックされた要素にgタグが見つかりませんでした。');
    // }
}

// マップ要素にクリックイベントを追加
document.querySelectorAll('g[data-name]').forEach(gTag => {
    gTag.addEventListener('click', function () {
        description(this);
    });
});
