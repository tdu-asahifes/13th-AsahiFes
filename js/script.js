
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



document.querySelectorAll('.navbar-nav .nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide(); // メニューを閉じる
    });
});

function modalOpen(kikakuId) {
    //------------------------------------------------------------
    //  モーダルウインドウ オープン
    //------------------------------------------------------------
    document.getElementById("modalArea1").className = "modalBg modalBgOpen";
    changeText(kikakuId);
    console.log(kikakuId);
}

function modalClose() {
    //------------------------------------------------------------
    //  モーダルウインドウ クローズ
    //------------------------------------------------------------
    document.getElementById("modalArea1").className = "modalBg modalBgClose";
}

// JavaScriptファイル (script.js) 内のコード

// テキストを書き換える関数
function changeText(kikakuId) {
    // idが"target"の要素を取得
    var targetElement = document.getElementById("target");
    console.log(kikakuId);

    // テキストを新しい内容に書き換える

    if (kikakuId == "random") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"imeges/kikaku/furugisyousai.png\">";
        console.log(kikakuId);
    }
    else if (kikakuId == "fureai") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"images/kikaku/fureaisyousai.png\">";
        console.log(kikakuId);
    }
    else if (kikakuId == "1nen") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"images/kikaku/1nensyousai.png\">";

        console.log(kikakuId);
    }
    else if (kikakuId == "kodomo") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"material/kikaku/kodomodetail.png\">";
        console.log(kikakuId);
    }
    else if (kikakuId == "yatai") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"images/kikaku/yataisyousai.png\">";
        console.log(kikakuId);
    }
    else if (kikakuId == "stamp") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"images/kikaku/stampsyousai.png\">";
        console.log(kikakuId);
    }
    else if (kikakuId == "yatai") {
        targetElement.innerHTML = "<img class=\"modalimg\" src=\"images/kikaku/yataisyousai.png\">";
        console.log(kikakuId);
    }
}