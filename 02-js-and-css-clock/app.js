const hourHand = document.querySelector(".hands.hour-hand");
const minuteHand = document.querySelector(".hands.minute-hand");
const secondHand = document.querySelector(".hands.second-hand");
const dayDisplay = document.querySelector(".day-display");

function setTime() {
  const now = new Date();
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const hourDegrees = hour * 30 + 90 + minute * 0.5;
  const minuteDegrees = minute * 6 + 90 + second * 0.1;
  const secondDegrees = second * 6 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  dayDisplay.textContent = day;
  console.log(minute * 6 + 90 + second / 10);
}

setInterval(setTime, 1000);
