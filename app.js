const digitalClock = document.querySelector(".digital-clock");

function updateTime() {
  const timeNow = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeString = timeNow.toLocaleTimeString("en-US", { timeZone });
  digitalClock.textContent = timeString;
}

setInterval(updateTime, 1000);
