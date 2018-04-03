const secondsHand = document.querySelector(".second-hand");

const minsHand = document.querySelector(".min-hand");

const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = 6 * seconds + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  // console.log('mins: ', mins);
  const minsDegrees = 6 * mins + 90;
  // console.log('minsDegrees: ', minsDegrees);

  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getSeconds();
  // console.log('hours: ', hours);
  const hoursDegrees = 6 * hours + 90;
  // console.log('hoursDegrees: ', hoursDegrees);
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // console.log(seconds);
}
setInterval(setDate, 1000);
