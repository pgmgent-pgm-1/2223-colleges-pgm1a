function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

console.log(generateRandomNumber(10, 20));
console.log(generateRandomNumber(6, 17));
