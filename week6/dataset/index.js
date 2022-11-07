(() => {
  const podcasts = [
    {
      id: 1393,
      name: "Vrouwmibo",
      image:
        "https://www.ninawarink.nl/wp-content/uploads/2022/09/7b923cd0-0c4f-4bb1-8526-108b6bf8c786.jpg",
    },
    {
      id: 2292,
      name: "BROERS",
      image:
        "https://podhub.nl/wp-content/uploads/2021/01/broers-met-sam-rijk.jpg",
    },
    {
      id: 3129,
      name: "Welcome To The AA",
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts114/v4/97/70/9f/97709f62-1f18-4e93-56b2-7071d3c25937/mza_7139921491314192916.jpg/1200x1200bb.jpg",
    },
    {
      id: 44959,
      name: "Duterloo Digitals de Podcast",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource125/v4/0b/9d/49/0b9d49d9-ef73-3c3d-ae7f-59d0efd7ee2d/73d90323-e10e-4fad-8dd8-9c564434e913.jpg/552x0w.webp",
    },
    {
      id: 53939,
      name: "Misfits",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/2b/6d/6a/2b6d6ad6-78ad-2199-7562-c88826a848ac/mza_6137515892114378937.jpg/552x0w.webp",
    },
    {
      id: 62929,
      name: "Beauty Bores Me",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/93/7a/ed/937aed37-b546-b828-8515-29f5fd766846/mza_3372535332779324801.jpg/552x0w.webp",
    },
  ];

  // alle code binnen de IIFE
  const $list = document.getElementById("list");

  const html = podcasts
    .map((podcast) => {
      return `
      <li data-id="${podcast.id}">
        <img src="${podcast.image}" alt="${podcast.name}" />
        <h2>${podcast.name}</h2>
      </li>
    `;
    })
    .join("");

  $list.innerHTML = html;

  const $items = document.querySelectorAll("#list li");
  for (const $item of $items) {
    $item.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const item = podcasts.find((podcast) => {
        return podcast.id === parseInt(id);
      });
      window.alert(`Podcast ${item.id}: ${item.name}`);
    });
  }
})();
