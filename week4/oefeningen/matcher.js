const groups = [
  "7 tot 11",
  "11 tot 15",
  "15 - 18",
  "18 - 23",
  "23 - 28",
  "28 - 36",
  "36 - 50",
  "50 - 64",
  "64 - 80",
];

const themes = [
  "pruiken",
  "nagels",
  "aquariums",
  "mondmaskers",
  "sneakers",
  "gepersonaliseerd wc-papier",
];

const generateMatch = () => {
  const group = groups[0]; // TODO random getal ipv 0
  const theme = themes[0]; // TODO random getal ipv 0
  return `Maak een webshop voor ${group} jarigen waar ze gepersonaliseerd ${theme} verkopen.`;
};

console.log(generateMatch());
console.log(generateMatch());
console.log(generateMatch());
console.log(generateMatch());
