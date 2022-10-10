const countSpecifiedCharacter = (text, search) => {
  let count = 0;
  // optie 1: string naar array
  const characters = text.split("");
  for (const character of characters) {
    if (character.toLowerCase() === search) {
      count++;
    }
  }
  return count;
};

const countSpecifiedCharacterAlt = (text, search) => {
  let count = 0;
  // optie 1: string naar array
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === search) {
      count++;
    }
  }
  return count;
};

console.log(countSpecifiedCharacter("Javascript", "a"));
console.log(countSpecifiedCharacterAlt("Javascript", "j"));
