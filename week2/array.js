const name = "Michael"; // string
const i = 10; // number
const isTrue = true; // boolean

// array
const brands = ["Nike", "New Balance", "Adidas"];
console.log(brands.length);
console.log(brands[0]); // Nike
console.log(brands[1]); // New Balance
console.log(brands[2]); // Adidas

const array = [true, false, "Hallo", 10, 39];
// eerste item
console.log(array[0]);
// aantal items
console.log(array.length);
// index 0 is eerste, dus laatste item is lengte - 1
let lastIndex = array.length - 1;
console.log(array[lastIndex]);

// overlopen array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
