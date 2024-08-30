// import { fetchRecipes } from "./src/api/api.js";
// import {
//   filterIngredients,
//   filterAppliances,
//   filterUstensils,
// } from "./src/scripts/utils/filters_create.js";
// import { displayData } from "./src/scripts/main_index/index.js";
// import { fillFilters } from "./src/scripts/utils/filters_fill.js";
// import { isArrowClicked } from "./src/scripts/utils/filters_fill.js";

// // Fonction d'initialisation de l'application
// async function initApp() {
//   // Récupérer les recettes
//   let recipes = await fetchRecipes();

//   // Initialiser l'affichage des données
//   displayData(recipes);

//   // Initialiser les filtres
//   fillFilters(recipes);

//   // Configurer les filtres pour n'ouvrir qu'un seul à la fois
//   isArrowClicked();

//   // Initialiser les composants individuels de filtres
//   filterIngredients();
//   filterAppliances();
//   filterUstensils();

//   // Vous pouvez également ajouter d'autres initialisations ici si nécessaire
// }

// // Appeler la fonction d'initialisation lorsque le DOM est prêt
// document.addEventListener("DOMContentLoaded", initApp);
