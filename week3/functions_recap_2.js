const name1 = "Tiba";
const name2 = "Karim";
const name3 = "Quinten";

function sayName(name, age) {
  return `Er is een persoon die ${name} heet en die is ${age} jaar oud`;
}

const sentence = sayName(name1, 20);
console.log(sentence);
sayName(name2);
sayName(name3);

function addition(x, y) {
  return x + y;
}
const total = addition(2, 3);
