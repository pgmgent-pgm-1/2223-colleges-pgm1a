const sodas = ["Coca-Cola", "Fanta", "Sprite", "River Cola"];

// for-of met index (niet super belangrijk)
for (const [index, soda] of sodas.entries()) {
  console.log(soda);
  console.log(index);
}

// normal for-of loop = moderner
for (const soda of sodas) {
  console.log(soda);
}

// for-each = ouderwets
sodas.forEach(function (soda) {
  console.log(soda);
});

// item toevoegen op het einde
sodas.push("Citroenlimonade van de Colruyt");
console.log(sodas);

// item toevoegen in begin van array
sodas.unshift("Ice-Tea", "Monster");
console.log(sodas);

// items toevoegen op positie
sodas.splice(1, 0, "Red-Bull");
console.log(sodas);

// items te verwijderen vanaf een bepaalde locatie
sodas.splice(2, 3); // vanaf index 2 verwijderen we 3 items
console.log(sodas);

// twee arrays samenvoegen
const sandwichesOne = ["Martino", "Smos"];
const sandwichesTwo = ["Tonijn"];
const sandwiches = sandwichesOne.concat(sandwichesTwo);
console.log(sandwiches); // sandwichesOne is niet aangepast!!

let cheeses = ["brie", "gouda", "camembert"];
// laatste element verwijderen
cheeses.pop();
console.log(cheeses); // ["brie", "gouda"]

// eerste element verwijderen
cheeses.shift();
console.log(cheeses); // ["gouda"];

// een deel uit een array te nemen
cheeses = ["brie", "gouda", "camembert"];
const newCheeses = cheeses.slice(1, 3);
console.log(newCheeses);

const clothes = ["cargopants", "shorts", "t-shirts", "bermudas", "jurken"];
// op dit moment is clothes een array
// we kunnen deze omvormen naar een string
console.log(clothes);
console.log(clothes.join("-")); // array naar string

// omgekeerde
const sentence = "Hallo het is oktober";
// string omvormen naar array
let sentenceArray = sentence.split(" ");
// array omdraaien
sentenceArray = sentenceArray.reverse();
// terug naar een string
console.log(sentenceArray.join(" "));
