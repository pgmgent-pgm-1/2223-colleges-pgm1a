(() => {
  const recipe = {
    title: "Oosterse wortelgazpacho",
    servings: 4,
    ingredients: [
      {
        name: "wortels",
        amount: "550 gr",
      },
      {
        name: "kokosmelk",
        amount: "250 ml",
      },
      {
        name: "rode wijnazijn",
        amount: "2 el",
      },
    ],
  };

  const getIngredientsString = (ingredients) => {
    return ingredients
      .map((ingredient) => {
        return `${ingredient.amount}  ${ingredient.name}`;
      })
      .join("\n");
  };

  const output = `
============================================
|             FAVORITE RECIPE              |
============================================
Name:           ${recipe.title}
--------------------------------------------
Servings:       ${recipe.servings}
--------------------------------------------
Ingredients
--------------------------------------------
${getIngredientsString(recipe.ingredients)}
============================================
  `;

  console.log(output);
})();
