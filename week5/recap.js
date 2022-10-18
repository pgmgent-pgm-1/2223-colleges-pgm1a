const items = [10, 5, 2, 7];
// map array naar nieuwe array
const newItems = items.map((item) => {
  console.log(item);
  return item * 2;
});
console.log(newItems);

// plak array aan elkaar naar string
const newString = newItems.join("\n");
console.log(newString);
