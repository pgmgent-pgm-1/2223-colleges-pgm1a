function reverse(number) {
  // stap 1: number naar string
  // number = String(number);
  // number += "";
  number = `${number}`;

  // stap 2: string naar array
  const stringToArray = number.split("");

  // stap 3: array omdraaien
  const reversed = stringToArray.reverse();

  // stap 4 array naar string
  return reversed.join("");
}

console.log(reverse(2843849));
