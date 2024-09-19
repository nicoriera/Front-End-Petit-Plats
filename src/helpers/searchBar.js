// Fonction pour vérifier si des tags sont actifs
function hasActiveTags() {
  return (
    document.querySelectorAll(".tag__ingredients--wrapper .tag__ingredient")
      .length > 0 ||
    document.querySelectorAll(".tag__appliances--wrapper .tag__appliance")
      .length > 0 ||
    document.querySelectorAll(".tag__ustensils--wrapper .tag__ustensil")
      .length > 0
  );
}

// Sélection des éléments DOM nécessaires
const searchBarInput = document.querySelector(".search__input");
const noResultText = document.querySelector(".no-result-message");
const searchButton = document.querySelector(".search__button");
const clearSearchButton = document.querySelector(".search__input__clear");

if (!searchBarInput) {
  console.error(
    "L'élément avec la classe .search__input est introuvable dans le DOM."
  );
}

if (!noResultText) {
  console.error(
    "L'élément avec la classe .no-result-message est introuvable dans le DOM."
  );
}

if (!clearSearchButton) {
  console.error(
    "L'élément avec la classe .search__input__clear est introuvable dans le DOM."
  );
}

if (!searchButton) {
  console.error(
    "L'élément avec la classe .search__button est introuvable dans le DOM."
  );
}

// Déclaration du timer pour gérer le délai de recherche
let typingTimer;
const typeInterval = 100; // Intervalle de délai de recherche en millisecondes

// Implémentation du Quick Sort avec programmation native loops
function quickSortNative(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].name.toLowerCase() < pivot.name.toLowerCase()) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSortNative(left), pivot, ...quickSortNative(right)];
}

// Fonction de recherche avec programmation native loops
function searchLive() {
  const tagsUsed = hasActiveTags(); // Vérifie si des tags sont actifs
  let recipesToDisplay = [];
  let mainInput = getSearchInput(); // Récupère l'input principal

  if (isValidSearchInput(mainInput)) {
    recipesToDisplay = searchRecipes(mainInput);
    recipesToDisplay = quickSortNative(recipesToDisplay); // Tri natif
    fillFilters(recipesToDisplay);
  }

  if (tagsUsed) {
    recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
  }

  displayResults(recipesToDisplay, mainInput, tagsUsed);

  toggleClearSearchButton(); // Affiche ou masque le bouton de suppression
}

// Récupère la valeur de l'input de recherche
function getSearchInput() {
  return searchBarInput && searchBarInput.value.length > 2
    ? sanitizeInput(searchBarInput.value.toLowerCase())
    : "";
}

// Filtre les recettes en fonction de l'input principal
function searchRecipes(mainInput) {
  const filteredRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (
      recipe.name.toLowerCase().includes(mainInput) ||
      recipe.description.toLowerCase().includes(mainInput) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(mainInput)
      )
    ) {
      filteredRecipes.push(recipe);
    }
  }
  return filteredRecipes;
}

// Gère l'affichage des résultats de la recherche
function displayResults(recipesToDisplay, mainInput, tagsUsed) {
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = "";
    displayData(recipesToDisplay);
  } else if (mainInput) {
    // Sanitize l'input avant de l'afficher
    const sanitizedMainInput = sanitizeInput(mainInput);
    noResultText.innerHTML = `<p>Aucune recette ne contient '${sanitizedMainInput}' vous pouvez chercher "tarte aux pommes", "poisson", etc.</p>`;
    displayData([]);
  }

  if (!isValidSearchInput(mainInput, 2) && !tagsUsed) {
    fillFilters(recipes);
    displayData(recipes);
    noResultText.innerHTML = "";
  }
}

// Affiche ou masque le bouton de suppression de recherche
function toggleClearSearchButton() {
  clearSearchButton.style.display = searchBarInput.value ? "block" : "none";
}

// Gestion de la recherche au clic sur le bouton
if (searchButton) {
  searchButton.addEventListener("click", searchLive);
}

// Gestion du bouton de suppression
if (clearSearchButton && searchBarInput) {
  clearSearchButton.addEventListener("click", () => {
    searchBarInput.value = "";
    clearSearchButton.style.display = "none";
    searchLive(); // Réinitialiser la recherche après suppression du texte
    searchBarInput.focus(); // Remettre le focus sur l'input
  });
}

// Fix de l'ajout d'événement
if (searchBarInput) {
  searchBarInput.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(searchLive, typeInterval);
  });
}
