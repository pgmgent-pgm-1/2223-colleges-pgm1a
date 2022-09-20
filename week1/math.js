let a = 20;
let b = 30;
let c = 40;
let d = 50;
let e = 24;

// basis
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// rest waarde
console.log(d % b);

let i = 0;
i = i + 1;
console.log(i); // 1
i += 1; // i = i + 1;
console.log(i); // 2
i -= 1; // i = i - 1;
console.log(i); // 1
i *= 2; // i = i * 2;
console.log(i); // 2
i /= 2; // i = i / 2;
console.log(i); // 1

let j;
console.log(j); // undefined
j = 5;
console.log(j++); // result of j++ is 5, but j is now 6
console.log(++j); // result of ++j is 7, j is 7
console.log(j--); // result of j-- is 7, j is 6
console.log(--j); // result of --j is 5, j is 5

if (j === 5) {
  // true
  console.log("J is gelijk aan 5");
}
if (j !== 5) {
  // false
  console.log("J is niet gelijk aan 5");
}
if (j >= 5) {
  // true
  console.log("J is groter of gelijk aan 5");
}
if (j <= 5) {
  // true
  console.log("J is kleiner of gelijk aan 5");
}

if (j > 5) {
  console.log("Groter dan 5");
} else {
  console.log("Niet groter dan 5");
}

let isTuesday = true; // boolean
if (isTuesday) {
  console.log("Het is dinsdag");
} else {
  console.log("Het is niet dinsdag");
}
