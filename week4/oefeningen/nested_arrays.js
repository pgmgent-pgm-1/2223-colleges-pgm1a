const a = [
  [1, 2, 1, 24], // 0
  [8, 11, 9, 4], // 1
  [7, 0, 7, 27], // 2
  [7, 4, 28, 14], // 3
  [3, 10, 26, 7], // 4
];

// voor de opdracht met forEach, MAAR eigenlijk beter met .map() en .join("");
let html = "";
a.forEach((items, index) => {
  html += `
------------------------------------------------------
Row ${index}
------------------------------------------------------
`;
  // optie 1
  // html += items.join("\n");

  // optie 2
  items.forEach((item) => {
    html += item + "\n";
  });
});

console.log(html);
