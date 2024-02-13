const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

function updateTime() {
  const timeNow = new Date();
  const dateNow = new Date().toISOString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeString = timeNow.toLocaleTimeString("en-US", { timeZone });
  digitalClock.textContent = timeString;
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
