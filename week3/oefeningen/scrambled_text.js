function scrambleText(text) {
  // logica bv. indien text = "website" -> bv. webstie

  let scrambled = "";
  const length = text.length;
  for (let i = 0; i < length; i++) {
    // random index van 0 tot lengte text (text is elke keer kleiner)
    const index = Math.round(Math.random() * (text.length - 1));
    // character via random index toevoegen aan nieuwe woord
    scrambled += text[index];
    // text aanpassen naar enkel de characters die overblijven
    // bv. i gekozen => "webs" + "te" dus "webste" blijft over om uit te kiezen
    text = text.substring(0, index) + text.substring(index + 1, text.length);
  }
  return scrambled;
}

console.log(`The word "website" scrambled is ${scrambleText("website")}`);
console.log(
  `The word "webdevelopment" scrambled is ${scrambleText("webdevelopment")}`
);
console.log(
  `The word "programming" scrambled is ${scrambleText("programming")}`
);
