let recipes = [];

async function getDataJson() {
  recipes = await fetchRecipes();

  init();
}
/*** Afficher les cards ***/
function displayData(recipes) {
  const recipeSection = document.getElementById("recipes__cards");
  const recipeCount = document.getElementById("recipes__number");
  recipeSection.innerHTML = "";
  for (const recipe of recipes) {
    /* getRecipeCard is defined in recipes_cards.js */
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  }
  recipeCount.textContent = `${recipes.length} recettes`;
  recipeCount.classList.add("text-[21px]", "font-normal", "font-['Anton']");
}

function init() {
  /* Afficher les recipes */
  displayData(recipes);
  /* Afficher les filtres */
  filterIngredients();
  filterAppliances();
  filterUstensils();

  /* Rechercher dans les filtres */
  inputIngredient();
  inputAppliance();
  inputUstensil();
  /* N'ouvrir qu'un seul filtre à la fois */
  isArrowClicked();
  /* Remplir les filtres avec les données */
  fillFilters(recipes);
}

getDataJson();
