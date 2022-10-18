(() => {
  const $container = document.getElementById("list");

  const todoList = [
    {
      title: "Op reis gaan",
      subList: [
        {
          title: "Geld sparen",
        },
        {
          title: "Kleding kopen",
        },
        {
          title: "Uitstap plannen",
          subList: [
            {
              title: "Auto huren",
              subList: [
                {
                  title: "Creditcard aanvragen",
                  subList: [
                    {
                      title: "Bellen",
                    },
                  ],
                },
              ],
            },
            {
              title: "Restaurants reserveren",
            },
          ],
        },
      ],
    },
    {
      title: "Oefeningen maken",
    },
    {
      title: "Taak webdesign",
      subList: [
        {
          title: "Starten",
        },
      ],
    },
  ];

  // recursive functie = roept zichzelf aan indien nodig
  const createList = (list) => {
    return `
    <ul>
      ${list
        .map((item) => {
          return `
          <li>
            ${item.title}
            ${item.subList ? createList(item.subList) : ""}
          </li>
        `;
        })
        .join("")}
    </ul>
    `;
  };

  $container.innerHTML = createList(todoList);
})();
