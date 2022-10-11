const a = "hallo";
const b = "hallo";
const c = "welkom";

console.log(a === b); // true
console.log(a === c); // false

const i = 10;
const j = 10;

console.log(i === j); // true
console.log(i === 14); // false

let person1 = { name: "Michael" };
let person2 = { name: "Michael" };
console.log(person1 === person2); // false

person2 = person1;
console.log(person1 === person2); // true

let array1 = ["a", "b"];
let array2 = ["a", "b"];
console.log(array1 === array2); // false

array2 = array1;
console.log(array1 === array2); // true

// object = by reference
const car1 = {
  brand: "Fiat",
  model: "Multipla",
};
const car2 = car1; // referentie naar object van car1
const car3 = { ...car1 }; // nieuw object met inhoud car1
car1.color = "Zwart";
console.log(car1); // bevat color
console.log(car2); // bevat ook color
console.log(car3); // bevat NIET color

// string = by value
let name1 = "Hallo";
const name2 = name1;
name1 += " iedereen";
console.log(name1); // "Hallo iedereen"
console.log(name2); // "Hallo"

// array = by reference
const themeParks1 = [
  "Efteling",
  "Walibi Belgium",
  "Plopsaland",
  "Phantasialand",
  "Parc Asterix",
  "Disneyland Parijs",
];
const themeParks2 = themeParks1;
const themeParks3 = [...themeParks1]; // kopie van inhoud themeParks1
themeParks1.push("Warner Bros Moviepark");
themeParks2.push("Legoland");
console.log(themeParks1); // bevat 2 nieuwe
console.log(themeParks2); // bevat 2 nieuwe
console.log(themeParks3); // bevat NIET de 2 nieuwe

function addThemePark(parks, park) {
  parks.push(park);
}
addThemePark(themeParks1, "Bobbejaanland");
console.log(themeParks1); // bevat Bobbejaanland
addThemePark([...themeParks1], "Toverland");
console.log(themeParks1); // bevat niet Toverland
