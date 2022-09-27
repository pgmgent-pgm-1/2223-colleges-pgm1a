let sum1 = 2 * (5 + 5);
let sum2 = 2 * (10 + 10);
let sum3 = 2 * (13 + 13);
let sum4 = 2 * (17 + 17);

function calculateSum(number) {
  // console.log(2 * (number + number));
  return 2 * (number + number);
}

console.log("Hallo we zijn hier");
calculateSum(5);
calculateSum(8);
calculateSum(12);
calculateSum(120);

const sum = calculateSum(5);
console.log(sum);

function sayHello(name, hobby) {
  console.log(`
  Aangenaam,
  Ik ben ${name} en mijn hobby is ${hobby}`);
}
sayHello("Bob", "voetbal");
sayHello("Moonlight", "pottenbakken");
sayHello("Bert", "paardrijden");
