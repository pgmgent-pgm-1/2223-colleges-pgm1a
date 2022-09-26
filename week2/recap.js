const name = "Michael"; // string
const i = 10; // number
const isRed = false; // boolean

if (isRed) {
  console.log("Het is rood");
} else {
  console.log("Niet rood");
}

if (i > 10) {
  console.log("I is groter dan 10");
}

if (name === "Michael") {
  console.log("Name is Michael");
} else {
  console.log("Name is not Michael");
}

switch (name) {
  case "Michael":
    console.log("Name is Michael");
    break;
  case "Philippe":
    console.log("Name is Philippe");
    break;
  default:
    console.log("Name is not Michael or Philippe");
    break;
}

// math
const j = 2;
// 2 tot de macht 3
console.log(Math.pow(j, 3)); // 8
console.log(j ** 3); // 8 (alternatief)
console.log(10 / 0); // Infinity
