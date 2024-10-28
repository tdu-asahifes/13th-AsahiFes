function fetchAndUpdateData() {
// fetchでデータを取得して処理
fetch('https://script.google.com/macros/s/AKfycbzILj9m_yBnwtCrxXqZH2UdUE38xYLKr7N3AamqO4waSj3-T8il8GpZt3oMJ1E37kYp/exec')
  .then(response => response.json())
  .then(data => {
    // 展示、屋台、公演それぞれの部門を処理
    const exhibition = data.exhibition.map(item => {
      return {
        name: item.name.replace(/\s*[（(].*?[）)]\s*/g, ''), // 全角・半角括弧内の内容を削除
        votes: item.votes
      };
    });

    const foodStall = data.foodStall.map(item => {
      return {
        name: item.name.replace(/\s*[（(].*?[）)]\s*/g, ''),
        votes: item.votes
      };
    });

    const stage = data.stage.map(item => {
      return {
        name: item.name.replace(/\s*[（(].*?[）)]\s*/g, ''),
        votes: item.votes
      };
    });

    // それぞれの部門で1位から3位までをHTMLに表示
    document.getElementById('exhibition-1').textContent = exhibition[0] ? `${exhibition[0].name} (${exhibition[0].votes}票)` : '該当なし';
    document.getElementById('exhibition-2').textContent = exhibition[1] ? `${exhibition[1].name} (${exhibition[1].votes}票)` : '該当なし';
    document.getElementById('exhibition-3').textContent = exhibition[2] ? `${exhibition[2].name} (${exhibition[2].votes}票)` : '該当なし';

    document.getElementById('foodStall-1').textContent = foodStall[0] ? `${foodStall[0].name} (${foodStall[0].votes}票)` : '該当なし';
    document.getElementById('foodStall-2').textContent = foodStall[1] ? `${foodStall[1].name} (${foodStall[1].votes}票)` : '該当なし';
    document.getElementById('foodStall-3').textContent = foodStall[2] ? `${foodStall[2].name} (${foodStall[2].votes}票)` : '該当なし';

    document.getElementById('stage-1').textContent = stage[0] ? `${stage[0].name} (${stage[0].votes}票)` : '該当なし';
    document.getElementById('stage-2').textContent = stage[1] ? `${stage[1].name} (${stage[1].votes}票)` : '該当なし';
    document.getElementById('stage-3').textContent = stage[2] ? `${stage[2].name} (${stage[2].votes}票)` : '該当なし';
  })
  .catch(error => console.error('Error:', error));

}
// 初回読み込み時にデータを取得して表示
fetchAndUpdateData();

setInterval(fetchAndUpdateData, 60000);