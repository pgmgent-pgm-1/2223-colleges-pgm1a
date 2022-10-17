const teachers = ["Michael", "Philippe", "Jannes"];

// ul ophalen
const $ul = document.getElementById("list");

// teachers omzetten naar html
let html = teachers
  .map((teacher) => {
    return `<li>${teacher}</li>`;
  })
  .join("");

// html veranderen op pagina
$ul.innerHTML = html;
