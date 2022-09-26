console.log(true); // true
console.log(true && true); // true
console.log(true && true && true); // true
console.log(false && true); // false
console.log(false && true && true); // false
console.log("Hallo" && true); // true
console.log(undefined && true); // undefined (in dit geval false)

// let name;
let name = "Philippe";
if (name) {
  console.log(`Naam is ${name}`);
} else {
  console.log("Nog geen naam gekozen");
}

let color = "red";
if (color === "red" && name === "Philippe") {
  console.log("Correct");
} else {
  console.log("Niet correct");
}

// || = or (en) = of (nl)
console.log(true || false); // true
console.log(false || true); // true
console.log(true || false || false); // true
console.log(true || true); // true
console.log(false || false); // false
console.log("Hallo" || false); // true

color = "orange";
if (color === "red" || name === "Philippe") {
  console.log("Correct");
} else {
  console.log("Niet correct");
}

console.log(color === "orange" ? "Correct" : "Niet correct");
