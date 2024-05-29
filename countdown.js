const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// document.addEventListener("DOMContentLoaded", function() {
//   const countTime =
//   setTimeout(function() {

//   })
// })

const countDownTime = new Date("September 30, 2024, 23:32:25").getTime();

setInterval(() => {
  const currentTime = new Date().getTime();
  const timeDistance = countDownTime - currentTime;

  // Calcualte the time for days, hours, minutes, seconds
  const oneDayInMilSeconds = 1000 * 60 * 60 * 24;
  const oneHourInMilSeconds = 1000 * 60 * 60;

  const daysCount = Math.floor(timeDistance / oneDayInMilSeconds);
  const hoursCount = Math.floor(
    (timeDistance % oneDayInMilSeconds) / oneHourInMilSeconds
  );

  const minutesCount = Math.floor(
    (timeDistance % oneHourInMilSeconds) / (1000 * 60)
  );

  const secondsCount = Math.floor((timeDistance % (1000 * 60)) / 1000);

  // Show the times in HTML Element
  days.innerHTML = daysCount;
  hours.innerHTML = hoursCount;
  minutes.innerHTML = minutesCount;
  seconds.innerHTML = secondsCount;

  // Expiry message showing
  if (timeDistance < 1) {
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    const counter = document.getElementById("counter");
    counter.innerHTML = "Offers expired";
    counter.style.color = "red";
  }
}, 1000);
