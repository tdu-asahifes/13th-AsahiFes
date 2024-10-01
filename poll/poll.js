
  async function fetchRankingData() {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzILj9m_yBnwtCrxXqZH2UdUE38xYLKr7N3AamqO4waSj3-T8il8GpZt3oMJ1E37kYp/exec');
    const data = await response.json();

    // 展示部門の順位を表示
    document.getElementById('exhibition-1').textContent = data.exhibition[0].name + ' (' + data.exhibition[0].votes + '票)';
    document.getElementById('exhibition-2').textContent = data.exhibition[1].name + ' (' + data.exhibition[1].votes + '票)';
    document.getElementById('exhibition-3').textContent = data.exhibition[2].name + ' (' + data.exhibition[2].votes + '票)';

    // 屋台部門の順位を表示
    document.getElementById('foodStall-1').textContent = data.foodStall[0].name + ' (' + data.foodStall[0].votes + '票)';
    document.getElementById('foodStall-2').textContent = data.foodStall[1].name + ' (' + data.foodStall[1].votes + '票)';
    document.getElementById('foodStall-3').textContent = data.foodStall[2].name + ' (' + data.foodStall[2].votes + '票)';

    // 公演部門の順位を表示
    document.getElementById('stage-1').textContent = data.stage[0].name + ' (' + data.stage[0].votes + '票)';
    document.getElementById('stage-2').textContent = data.stage[1].name + ' (' + data.stage[1].votes + '票)';
    document.getElementById('stage-3').textContent = data.stage[2].name + ' (' + data.stage[2].votes + '票)';
  }

  // ページロード時にデータを取得
  window.onload = fetchRankingData;
