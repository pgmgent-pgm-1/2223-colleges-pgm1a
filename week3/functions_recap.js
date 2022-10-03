let name1 = "Michael";
let name2 = "Karim";
let name3 = "Mila";

function sayName(name) {
  name = name.split("").reverse().join("");
  console.log(`Er is iemand die ${name} heet`);
}

sayName(name1);
sayName(name1);
sayName(name2);
sayName(name3);
