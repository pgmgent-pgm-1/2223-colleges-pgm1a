const nCols = 10;
const nRows = 10;
const character = "*";
const separator = " ";

/* optie 1:
 * Eerste for-loop telt af (i van 10 naar 0)
 * Tweede for-loop gebruikt i (10, 9, 8, ...)
 */
for (let i = nRows; i > 0; i--) {
  let line = "";
  for (let j = 0; j < i; j++) {
    if (j > 0) {
      line += separator;
    }
    line += character;
  }
  console.log(line);
}

/* optie 2:
 * Eerste for-loop telt op (i van 0 naar 10)
 * Tweede for-loop gebruikt 10 - i (10, 9, 8, ...)
 */
for (let i = 0; i < nRows; i++) {
  let line = "";
  for (let j = 0; j < nRows - i; j++) {
    if (j > 0) {
      line += separator;
    }
    line += character;
  }
  console.log(line);
}
