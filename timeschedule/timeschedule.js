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
      "ついに第13回旭祭の始まりです！",
    ダンス部:
      "東京電機大学ストリートダンス部のB.Light-Familiyです！初心者の子も旭祭に向けて楽しく練習してきたため、是非ステージを見てくださると嬉しいです！",
    演劇部: "こんにちは演劇部です。私たちは良い劇を作るために日々練習に励んでいます。旭祭は活動の集大成といえる場であり、観客の皆さんに最高の舞台を届けたいと考えています。皆様のご来場心よりお待ちしております。",
    コーストジャズオーケストラ部:
      "こんにちは！コーストジャズオーケストラ部です。コーストは、旭祭1日目、2日目どちらとも野外ステージでの演奏、屋台でのベビーカステラの販売を行います！ぜひベビーカステラを片手に演奏を聴きに来て下さい！",
    グリー倶楽部: "こんにちは、私たちはグリー俱楽部です。「グリー」とは男性声楽を指す言葉ですが、女性部員も多く在籍しており現在は混声合唱サークルとして活動しています。旭祭で合唱を披露するので、ぜひ聴きに来てください！",
    吹奏楽同好会: "昨年度2月に活動再開したばかりの団体です♫ 現在部員20名で週2回ほど活動中！ ポップスの曲なんかをワイワイ演奏しております!! 旭祭では野外ステージで演奏するのでぜひお越しください♪",
    モダンジャズ研究部:
      "私たちはスタンダードジャズを中心としたセッション形式での演奏をメインに活動しています！集団演奏はもちろんのこと、一人ひとりの個性を演奏に反映させることも大切にしています！是非お越しください！",
    転換期間: "次のパフォーマンスまでの休憩時間です。",
    お笑いライブ: "プロの芸人さんによるお笑いライブ！ 観覧は無料です",
    優秀団体表彰式: "大学同窓会は、課外活動において顕著な成果を収めた東京千住キャンパスの団体や学生の表彰を行います。",
    管弦楽部: "管楽器を演奏こんにちは！管弦楽部です！私たちは普段オーケストラという演奏形式で演奏し、年2回の定期演奏会に向けて練習しています。本学で弦楽器の生の演奏を聞けるのは本部活だけなのでぜひお越しください♪",
    PLOWLYNX: "「あなたの心とリンクするバンド」PLOW LYNX！ 2024年7月結成、東京発の3ピースロックバンドです。月3本のライブを各所で開催中。今回はオリジナル曲に加え、カバーも披露しますので、ぜひ遊びに来てください！",
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