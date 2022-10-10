// date
const date = new Date(); // current date

console.log(
  `Het is vandaag ${date.getDate()}/${
    date.getMonth() + 1
  } van het jaar ${date.getFullYear()}`
);

console.log(`Milliseconds ${date.getTime()}`);

const otherDate = new Date(2022, 9 - 1, 15, 20, 30, 10);
console.log(otherDate);

// set timeout
/* setTimeout(() => {
  console.log("Dit zal na 2 seconden zichtbaar zijn");
}, 1000 * 2); */

// set interval
setInterval(() => {
  console.log("Hallo");
}, 1000 * 5);
