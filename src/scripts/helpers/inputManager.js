// inputManager.js

export class InputManager {
  constructor() {
    this.setupSearchRecipeListeners();
    this.setupOtherInputsListeners();
  }

  setupSearchRecipeListeners() {
    const $inputSearch = document.getElementById("search-recipes");
    const $clearSearchButton = document.getElementById("clear-search-recipes");
    const $searchButton = document.getElementById("button-search-recipes");

    if ($inputSearch && $clearSearchButton && $searchButton) {
      // Ajout des écouteurs d'événements
      $clearSearchButton.addEventListener(
        "click",
        this.handleClearSearch.bind(this)
      );
      $searchButton.addEventListener(
        "click",
        this.handleSearchButtonClick.bind(this)
      );
      $inputSearch.addEventListener("input", this.handleSearchInput.bind(this));
    } else {
      console.warn("Un ou plusieurs éléments sont absents dans le DOM.");
    }
  }

  handleClearSearch() {
    const $inputSearch = document.getElementById("search-recipes");
    const $clearSearchButton = document.getElementById("clear-search-recipes");

    if ($inputSearch) {
      $inputSearch.value = "";
      this.loadAllRecipes();

      const $noResult = document.querySelector(".no-result-message");
      if ($noResult) $noResult.remove();

      $clearSearchButton.classList.add("hidden");
    }
  }

  handleSearchButtonClick() {
    this.onSearchRecipes();
  }

  handleSearchInput() {
    const $inputSearch = document.getElementById("search-recipes");
    const $clearSearchButton = document.getElementById("clear-search-recipes");

    if ($inputSearch.value.trim() === "") {
      this.loadAllRecipes();
      const $noResult = document.querySelector(".no-result-message");
      if ($noResult) $noResult.remove();
      $clearSearchButton.classList.add("hidden");
    } else {
      $clearSearchButton.classList.remove("hidden");
    }
  }

  loadAllRecipes() {
    console.log("Chargement de toutes les recettes...");
    // Logique pour charger toutes les recettes
  }

  onSearchRecipes() {
    console.log("Recherche des recettes...");
    // Logique pour la recherche de recettes
  }

  setupOtherInputsListeners() {
    const inputIds = [
      "search-appliances",
      "search-ingredients",
      "search-ustensils",
    ];
    inputIds.forEach(this.setupClearButton.bind(this));
  }

  setupClearButton(inputId) {
    const input = document.getElementById(inputId);
    const clearButtonId = input.dataset.clear;
    const clearButton = document.getElementById(clearButtonId);

    if (!input || !clearButton) {
      console.warn(`Élément non trouvé : ${inputId} ou ${clearButtonId}`);
      return;
    }

    // Vérifie l'état initial de l'input
    clearButton.classList.toggle("hidden", !input.value);

    input.addEventListener("input", () => {
      clearButton.classList.toggle("hidden", !input.value);
    });

    clearButton.addEventListener("click", () => {
      input.value = "";
      clearButton.classList.add("hidden");
    });
  }
}

// Exporter une instance de la classe
export const inputManager = new InputManager();
