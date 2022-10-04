const color = "red"; // string
console.log(typeof color);
const isTuesday = true; // boolean
console.log(typeof isTuesday);
const a = 20; // number
console.log(typeof a);
const items = ["a", "b", "c"]; // array
console.log(typeof items);
const item = {
  name: "Michael",
}; // object
console.log(typeof item);

const lecturer = {
  name: "Michael",
  address: {
    street: "Straat",
    number: 10,
    city: "Ghent",
    postalCode: "9000",
  },
};

console.log(lecturer.name);
console.log(lecturer.address.street);

const artists = [
  {
    name: "Måneskin",
    genre: "pop-rock",
  },
  {
    name: "Eminem",
    genre: "hip-hop",
  },
  {
    name: "The Hu",
    genre: "metal",
  },
  {
    name: "Metallica",
    genre: "metal",
  },
];

// for loop
for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];
  console.log(`${artist.name} genre: ${artist.genre}`);
}

// for-of (= way to go)
for (const artist of artists) {
  console.log(`${artist.name} genre: ${artist.genre}`);
}

// for each (old-school)
artists.forEach(function (artist) {
  console.log(`${artist.name} genre: ${artist.genre}`);
});

// for-in
const artist = {
  name: "Adele",
  genre: "pop",
};
for (const property in artist) {
  console.log(property);
}

// while
let i = 100;
while (i < 100) {
  i *= 5;
  console.log("while", i);
}

// do-while
let j = 100;
do {
  j *= 5;
  console.log("do-while", j);
} while (j < 100);
