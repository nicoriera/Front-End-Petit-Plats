// Fonction pour récupérer les recettes depuis un fichier JSON
async function fetchRecipes() {
  try {
    const response = await fetch("src/data/recipes.json");
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    return [];
  }
}
