const nCols = 10;
const nRows = 10;
const character = "*";
const separator = " ";

for (let i = 0; i < nRows; i++) {
  let line = "";
  for (let j = 0; j < nCols; j++) {
    if (j > 0) {
      line += separator;
    }
    line += character;
  }
  console.log(line);
}
