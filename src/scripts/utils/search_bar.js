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

// Implémentation du Quick Sort avec des boucles natives
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].name.toLowerCase() < pivot.name.toLowerCase()) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Fonction de recherche avec boucles natives
function searchLive() {
  let tagsUsed = hasActiveTags(); // Déterminer s'il y a des tags actifs
  let recipesToDisplay = [];
  let mainInput;

  // Vérification si plus de 2 caractères sont saisis
  if (searchBarInput && searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value.toLowerCase();

    for (let i = 0; i < recipes.length; i++) {
      let recipeIsMatching = false;

      if (recipes[i].name.toLowerCase().includes(mainInput)) {
        recipeIsMatching = true;
      } else if (recipes[i].description.toLowerCase().includes(mainInput)) {
        recipeIsMatching = true;
      } else {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          if (
            recipes[i].ingredients[j].ingredient
              .toLowerCase()
              .includes(mainInput)
          ) {
            recipeIsMatching = true;
            break;
          }
        }
      }

      if (recipeIsMatching) {
        recipesToDisplay.push(recipes[i]);
      }
    }

    recipesToDisplay = quickSort(recipesToDisplay);
    console.log(recipesToDisplay);

    fillFilters(recipesToDisplay);
  }

  // Appliquer les tags si nécessaire
  if (tagsUsed) {
    recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
  }

  // Afficher les résultats ou un message d'erreur
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = "";
    displayData(recipesToDisplay);
  } else {
    noResultText.innerHTML = `<p>Aucune recette ne contient '${mainInput}' vous pouvez chercher "tarte aux pommes", "poisson", etc.</p>`;
    displayData([]);
  }

  // Réinitialisation si la barre de recherche est vide ou contient moins de 3 caractères
  if (searchBarInput && searchBarInput.value.length < 3 && !tagsUsed) {
    fillFilters(recipes);
    displayData(recipes);
    noResultText.innerHTML = "";
  }

  // Afficher ou masquer le bouton de suppression en fonction du texte dans l'input
  if (searchBarInput.value) {
    clearSearchButton.style.display = "block";
  } else {
    clearSearchButton.style.display = "none";
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
