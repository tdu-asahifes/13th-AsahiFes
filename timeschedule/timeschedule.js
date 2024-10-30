function updateCurrentTimeLine() {
    const Now = new Date();
    const hours = Now.getHours();
    const minutes = Now.getMinutes();
    let DAY = Now.getDate();
    const totalMinutes = hours * 60 + minutes;
    const timetableHeightOut = 840; //タイムテーブルの高さ
    const timetableHeightSpe = 600;
    const timetableHeightGym = 480;
    const startTime = 10 * 60; // 10:00の分数
    const endTime = 17 * 60; // 17:00の分数
    const startTimeGym = 13 * 60;
    const endTimeSpe = 15 * 60;
  
    const currentTimeLineOut1 = document.getElementById("currentTimeLineOut1");
    const currentTimeLineSpe1 = document.getElementById("currentTimeLineSpe1");
    const currentTimeLineGym1 = document.getElementById("currentTimeLineGym1");
    const currentTimeLineOut2 = document.getElementById("currentTimeLineOut2");
    const currentTimeLineSpe2 = document.getElementById("currentTimeLineSpe2");
    const currentTimeLineGym2 = document.getElementById("currentTimeLineGym2");
  
    if (totalMinutes >= startTime && totalMinutes <= endTime && DAY == 2) {
      const currentPositionOut1 =
        ((totalMinutes - startTime) / (endTime - startTime)) * timetableHeightOut; // 現在位置計算
      currentTimeLineOut1.style.top = `${currentPositionOut1}px`;
      currentTimeLineOut1.innerHTML = hours + ":" + minutes;
      currentTimeLineOut1.style.display = "block";
    } else {
      currentTimeLineOut1.style.display = "none"; // 時間外はラインを非表示
    }
    if (totalMinutes >= startTime && totalMinutes <= endTime && DAY == 3) {
      const currentPositionOut2 =
        ((totalMinutes - startTime) / (endTime - startTime)) * timetableHeightOut; // 現在位置計算
      currentTimeLineOut2.style.top = `${currentPositionOut2}px`;
      currentTimeLineOut2.innerHTML = hours + ":" + minutes;
      currentTimeLineOut2.style.display = "block";
    } else {
      currentTimeLineOut2.style.display = "none"; // 時間外はラインを非表示
    }
    if (totalMinutes >= startTime && totalMinutes <= endTimeSpe && DAY == 2) {
      const currentPositionSpe1 =
        ((totalMinutes - startTime) / (endTimeSpe - startTime)) *
        timetableHeightSpe;
      currentTimeLineSpe1.style.top = `${currentPositionSpe1}px`;
      currentTimeLineSpe1.innerHTML = hours + ":" + minutes;
      currentTimeLineSpe1.style.display = "block";
    } else {
      currentTimeLineSpe1.style.display = "none";
    }
    if (totalMinutes >= startTime && totalMinutes <= endTimeSpe && DAY == 3) {
      const currentPositionSpe2 =
        ((totalMinutes - startTime) / (endTimeSpe - startTime)) *
        timetableHeightSpe;
      currentTimeLineSpe2.style.top = `${currentPositionSpe2}px`;
      currentTimeLineSpe2.innerHTML = hours + ":" + minutes;
      currentTimeLineSpe2.style.display = "block";
    } else {
      currentTimeLineSpe2.style.display = "none";
    }
    if (totalMinutes >= startTimeGym && totalMinutes <= endTime && DAY == 2) {
      const currentPositionGym1 =
        ((totalMinutes - startTimeGym) / (endTime - startTimeGym)) *
        timetableHeightGym;
      currentTimeLineGym1.style.top = `${currentPositionGym1}px`;
      currentTimeLineGym1.innerHTML = hours + ":" + minutes;
      currentTimeLineGym1.style.display = "block";
    } else {
      currentTimeLineGym1.style.display = "none";
    }
    if (totalMinutes >= startTimeGym && totalMinutes <= endTime && DAY == 3) {
      const currentPositionGym2 =
        ((totalMinutes - startTimeGym) / (endTime - startTimeGym)) *
        timetableHeightGym;
      currentTimeLineGym2.style.top = `${currentPositionGym2}px`;
      currentTimeLineGym2.innerHTML = hours + ":" + minutes;
      currentTimeLineGym2.style.display = "block";
    } else {
      currentTimeLineGym2.style.display = "none";
    }
  }
  
  // 初期表示時にラインを設定
  updateCurrentTimeLine();
  // 1分ごとに更新
  setInterval(updateCurrentTimeLine, 60000);
  
  const eventDetails = {
    オープニングセレモニー:
      "オープニングセレモニーでは、特別ゲストの挨拶があります。",
    ダンス部:
      "ダンス部のパフォーマンスでは、さまざまなジャンルのダンスが披露されます。",
    演劇部: "演劇部による劇の上演があります。ユーモア満載のストーリーです。",
    コーストジャズオーケストラ部:
      "コーストジャズオーケストラ部の生演奏をお楽しみください。",
    グリー倶楽部: "グリー倶楽部による美しい合唱があります。",
    吹奏楽同好会: "吹奏楽同好会の演奏は迫力満点です。",
    モダンジャズ研究部:
      "モダンジャズ研究部のスリリングな演奏をお楽しみください。",
    転換期間: "次のパフォーマンスまでの休憩時間です。",
    お笑いライブ: "お笑いライブで楽しいひとときをお過ごしください。",
    優秀団体表彰式: "優秀団体の表彰式を行います。",
    管楽器部: "管楽器を演奏",
    PLOWLYNX: "PLOWLYNX",
    DJ部: "ダンスミュージック・EDM、音ゲー・アニソン・サブカル系などなど、多彩なジャンルのDJを取り揃えています。きっとあなたも気に入るDJがいるはず。",
  };
  
  function openModal(eventName) {
    const detail = eventDetails[eventName] || "詳細情報はありません。";
    document.getElementById("modal-text").innerText = detail;
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // モーダルの外をクリックしたときに閉じる
  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  };