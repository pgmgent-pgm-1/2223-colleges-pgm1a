const name = "Michael"; // string
const i = 30; // number
const isMonday = true; // boolean
const cars = ["BMW", "Mercedes", "Audi"]; // array

// objecten
const car1 = {
  brand: "Volkswagen",
  model: "Arteon",
  color: "roos",
  maxSpeed: 200,
  speak: function () {
    return `Ik ben een ${this.brand} ${this.model}`;
  },
};

console.log(car1.brand);
console.log(`${car1.brand} ${car1.model} in kleur ${car1.color}`);

const car2 = {
  brand: "Tesla",
  model: "S",
  color: "zwart",
};

console.log(`${car2.brand} ${car2.model} in kleur ${car2.color}`);

// objecten wijzigen
car1.color = "fluogeel";
console.log(`${car1.brand} ${car1.model} in kleur ${car1.color}`);
car1.horsePower = 128;
console.log(car1);
// property verwijderen
delete car1.horsePower;
console.log(car1);

const property = "model";
console.log(car1[property]);

console.log(car1.speak());

const makeupTools = [
  "lippenstift", // 0
  "mascara", // 1
  "oogschaduw", // 2
  "foundation", // 3
  "bronzer", // 4
];

// for-loop
for (let i = 0; i < makeupTools.length; i++) {
  console.log(makeupTools[i]);
}

// for-of is voor arrays
for (const tool of makeupTools) {
  console.log(`Tool: ${tool}`);
}

// for-in voor object
for (const property in car1) {
  console.log(`${property} is ${car1[property]}`);
}

// reverse array
makeupTools.reverse();
console.log(makeupTools);
