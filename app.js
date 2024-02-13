const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

function updateClock(time) {
  const timeNow = time.split(" ")[0].split(":");

  const seconds = timeNow[2];
  const mins = timeNow[1];
  const hour = timeNow[0];

  const secondsDegrees = (seconds / 60) * 360;
  document.querySelector(
    ".seconds"
  ).style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
  document.querySelector(
    ".minutes"
  ).style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;
  document.querySelector(
    ".hours"
  ).style.transform = `rotate(${hourDegrees}deg)`;
}

function updateTime() {
  const timeNow = new Date();
  const dateNow = new Date().toISOString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeString = timeNow.toLocaleTimeString("en-US", { timeZone });
  digitalClock.textContent = timeString;
  updateClock(timeString);
  date.textContent = formatDate(dateNow);
}

function formatDate(date) {
  const newDate = date.split("T")[0].split("-");

  const day = newDate[2];
  const year = newDate[0];
  const month =
    months[newDate[1].charAt(0) === 0 ? newDate[1].charAt(1) : newDate[1] - 1];

  const totalDate = day + " " + month + " " + year;
  return totalDate;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(updateTime, 1000);
