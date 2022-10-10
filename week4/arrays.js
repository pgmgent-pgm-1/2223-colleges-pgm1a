const cocktails = [
  {
    name: "Moscow Mule",
    ingredients: ["wodka", "suiker", "limoensap", "ginger beer"],
  },
  {
    name: "Pornstar Martini",
    ingredients: ["wodka", "passievrucht", "martini bianco"],
  },
  {
    name: "Cuba Libre",
    ingredients: ["rum", "cola", "limoen"],
  },
];

console.log(cocktails[cocktails.length - 1].name); // "Cuba Libre"

for (const cocktail of cocktails) {
  console.log(cocktail.name);
}

// filter (evenveel of minder (zelfs geen) items)
const filtered = cocktails.filter((cocktail) => {
  // indien ingredients wodka bevat -> true
  // anders -> false
  return cocktail.ingredients.includes("wodka");
});

console.log(cocktails);

// find (max 1 item OF undefined)
const hasWodka = cocktails.find((cocktail) => {
  return cocktail.ingredients.includes("wodka");
});
console.log(hasWodka);

// map (altijd evenveel items)
const mapped = cocktails.map((cocktail) => {
  return `We hebben een cocktail ${cocktail.name}`;
});

console.log(mapped);
