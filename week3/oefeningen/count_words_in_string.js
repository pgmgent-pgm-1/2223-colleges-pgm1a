function calculateAmountOfWords(sentence) {
  sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, "");
  sentenceWords = sentence.split(" ");
  return sentenceWords.length;
}

console.log(calculateAmountOfWords("Dit is een zin"));
