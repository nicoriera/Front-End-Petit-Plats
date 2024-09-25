let cachedRecipes = null;

async function fetchRecipes() {
  if (cachedRecipes) {
    console.log("Utilisation des recettes en cache");
    return cachedRecipes;
  }

  try {
    const response = await fetch("src/staticData/recipes.json");
    const data = await response.json();
    cachedRecipes = data.recipes; // Mettre en cache les recettes
    return cachedRecipes;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    return [];
  }
}
