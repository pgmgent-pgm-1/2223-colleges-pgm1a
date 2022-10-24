(() => {
  const colors = ["pink", "turquoise", "#baa502", "black", "#800851"];

  $btn = document.getElementById("button");
  $container = document.getElementById("container");

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  $btn.addEventListener("click", (e) => {
    $circle = `<div class="circle" style="top: ${getRandomNumber(
      0,
      100
    )}vh; left: ${getRandomNumber(0, 100)}vw; background-color: ${
      colors[getRandomNumber(0, colors.length - 1)]
    }"></div>`;
    $container.innerHTML += $circle;
  });
})();
