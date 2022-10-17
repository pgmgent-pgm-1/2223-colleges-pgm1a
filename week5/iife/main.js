(() => {
  const colors = ["pink", "turquoise", "#baa502", "black", "#800851"];
  const $rectangle = document.getElementById("rectangle");
  const $body = document.body;

  getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
  };

  setInterval(() => {
    // random index van 0 tot Length - 1
    const index = getRandomNumber(0, colors.length - 1);
    const bgIndex = getRandomNumber(0, colors.length - 1);
    // zet item met bepaalde index
    $body.style.backgroundColor = colors[bgIndex];
    $rectangle.style.backgroundColor = colors[index];
    $rectangle.style.width = `${getRandomNumber(15, 25)}vw`;
    $rectangle.style.height = `${getRandomNumber(15, 25)}vw`;
    $rectangle.style.borderRadius = `${getRandomNumber(0, 100)}%`;
  }, 1000);
})();
