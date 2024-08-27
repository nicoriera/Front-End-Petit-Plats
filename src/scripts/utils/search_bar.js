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

// Déclaration du timer pour gérer le délai de recherche
let typingTimer;
const typeInterval = 100; // Intervalle de délai de recherche en millisecondes

// Implémentation du Quick Sort avec programmation fonctionnelle
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const [pivot, ...rest] = arr;
  const left = rest.filter(
    (item) => item.name.toLowerCase() < pivot.name.toLowerCase()
  );
  const right = rest.filter(
    (item) => item.name.toLowerCase() >= pivot.name.toLowerCase()
  );

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Fonction de recherche avec programmation fonctionnelle
function searchLive() {
  const tagsUsed = hasActiveTags(); // Vérifie si des tags sont actifs
  let recipesToDisplay = [];
  let mainInput = "";

  if (searchBarInput && searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value.toLowerCase();

    recipesToDisplay = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(mainInput) ||
        recipe.description.toLowerCase().includes(mainInput) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(mainInput)
        )
    );

    recipesToDisplay = quickSort(recipesToDisplay); // Tri fonctionnel
    console.log(recipesToDisplay);

    fillFilters(recipesToDisplay);
  }

  if (tagsUsed) {
    recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
  }

  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = "";
    displayData(recipesToDisplay);
  } else {
    noResultText.innerHTML = `<p>Aucune recette ne contient '${mainInput}' vous pouvez chercher "tarte aux pommes", "poisson", etc.</p>`;
    displayData([]);
  }

  if (searchBarInput && searchBarInput.value.length < 3 && !tagsUsed) {
    fillFilters(recipes);
    displayData(recipes);
    noResultText.innerHTML = "";
  }
}
// Gestion de la recherche au clic sur le bouton
if (searchButton) {
  searchButton.addEventListener("click", searchLive);
}

// Gestion du bouton de suppression
if (clearSearchButton) {
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
