function countdown() {
  const targetDate = new Date("October 2, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  document.querySelector(".days").innerText = days;

  if (timeRemaining < 0) {
      document.getElementById("countdown").innerHTML = "カウントダウン終了";
  }
}

setInterval(countdown, 1000);
