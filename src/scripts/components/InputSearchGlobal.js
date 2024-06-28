class InputSearch {
  constructor(Recipes) {
    this.Recipes = Recipes;
    this.dropdownFilters = [];
  }

  addDropdownFilter(dropdownFilter) {
    this.dropdownFilters.push(dropdownFilter);
  }

  searchAllFields() {
    const searchValue = document.getElementById("search-recipes").value.trim();
    const ingredientsValue = document
      .getElementById("search-ingredients")
      .value.trim();
    const ustensilsValue = document
      .getElementById("search-ustensils")
      .value.trim();
    const appliancesValue = document
      .getElementById("search-appliances")
      .value.trim();

    // Check if all fields are empty
    const allEmpty =
      !searchValue && !ingredientsValue && !ustensilsValue && !appliancesValue;

    if (allEmpty) {
      this.loadAllRecipes();
      this.removeNoResultMessage();
      document.getElementById("clear-search-recipes").classList.add("hidden");
    } else {
      document
        .getElementById("clear-search-recipes")
        .classList.remove("hidden");
      this.removeNoResultMessage();
      const filteredRecipes = this.filterRecipesCombined(
        searchValue,
        ingredientsValue,
        ustensilsValue,
        appliancesValue
      );
      this.emitRecipeFilteredEvent(filteredRecipes);
      if (!filteredRecipes.length) {
        this.displayNoResultMessage("No recipes match your combined criteria.");
      }
    }
  }

  filterRecipesCombined(search, ingredients, ustensils, appliances) {
    return this.Recipes.filter(
      (recipe) =>
        (search &&
          (recipe.name.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search))) ||
        (ingredients &&
          recipe.ingredients.some((ing) =>
            ing.ingredient.toLowerCase().includes(ingredients)
          )) ||
        (ustensils &&
          recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(ustensils)
          )) ||
        (appliances && recipe.appliance.toLowerCase().includes(appliances))
    );
  }

  setupEventListeners() {
    const $inputSearch = document.getElementById("search-recipes");
    const $inputSearchIngredients =
      document.getElementById("search-ingredients");

    const $inputSearchUstensils = document.getElementById("search-ustensils");
    const $inputSearchAppliances = document.getElementById("search-appliances");
    const $clearSearchButton = document.getElementById("clear-search-recipes");

    const $labelIngredients = document.getElementById(
      "dropdown-ingredients-buttons"
    );
    const $labelUstensils = document.getElementById(
      "dropdown-ustensils-buttons"
    );
    const $labelAppliances = document.getElementById(
      "dropdown-appliances-buttons"
    );

    const labels = [$labelIngredients, $labelUstensils, $labelAppliances];

    labels.forEach((label) => {
      label.addEventListener("click", (event) => {
        console.log("Label clicked", label);
        console.log("Label clicked event", event.target);
        // Supposons que chaque label a une valeur data associée correspondant à ce qu'il doit rechercher
        const value = event.target.textContent;
        console.log("Value", value);
        const correspondingInputId = label.dataset.inputId;
        document.getElementById(correspondingInputId).value = value; // Met à jour le champ avec la valeur du label
        this.searchAllFields(); // Exécute la recherche
      });
    });

    const $searchButton = document.querySelector("#button-search-recipes");

    $inputSearch.addEventListener("input", () => {
      const trimmedValue = $inputSearch.value.trim();
      if (trimmedValue === "") {
        this.loadAllRecipes();
        this.removeNoResultMessage();
        $clearSearchButton.classList.add("hidden");
      } else {
        $clearSearchButton.classList.remove("hidden");
        this.removeNoResultMessage();
        this.onSearchRecipes(trimmedValue);
      }
      const filteredRecipes = this.filterRecipes(trimmedValue);
      this.emitRecipeFilteredEvent(filteredRecipes);
    });

    $inputSearchIngredients.addEventListener("input", () => {
      const ingredientsString = $inputSearchIngredients.value.trim();
      if (ingredientsString === "") {
        this.loadAllRecipes();
        this.removeNoResultMessage();
        $clearSearchButton.classList.add("hidden");
      } else {
        $clearSearchButton.classList.remove("hidden");
        this.removeNoResultMessage();
        this.onSearchRecipes(ingredientsString);
      }

      const filteredRecipes = this.filterRecipes(ingredientsString);
      this.emitRecipeFilteredEvent(filteredRecipes);
    });

    $inputSearchUstensils.addEventListener("input", () => {
      const ustensilsString = $inputSearchUstensils.value.trim();
      if (ustensilsString === "") {
        this.loadAllRecipes();
        this.removeNoResultMessage();
        $clearSearchButton.classList.add("hidden");
      } else {
        $clearSearchButton.classList.remove("hidden");
        this.removeNoResultMessage();
        this.onSearchRecipes(ustensilsString);
      }

      const filteredRecipes = this.filterRecipes(ustensilsString);
      this.emitRecipeFilteredEvent(filteredRecipes);
    });

    $inputSearchAppliances.addEventListener("input", () => {
      const appliancesString = $inputSearchAppliances.value.trim();
      if (appliancesString === "") {
        this.loadAllRecipes();
        this.removeNoResultMessage();
        $clearSearchButton.classList.add("hidden");
      } else {
        $clearSearchButton.classList.remove("hidden");
        this.removeNoResultMessage();
        this.onSearchRecipes(appliancesString);
      }

      const filteredRecipes = this.filterRecipes(appliancesString);
      this.emitRecipeFilteredEvent(filteredRecipes);
    });

    $clearSearchButton.addEventListener("click", () => {
      $inputSearch.value = "";
      this.loadAllRecipes();
      this.removeNoResultMessage();
      $clearSearchButton.classList.add("hidden");
    });

    $searchButton.addEventListener("click", () => {
      this.onSearchRecipes($inputSearch.value.trim());
    });

    document.addEventListener("ingredientsFiltered", (e) => {
      const ingredientsString = e.detail.ingredients.trim();
      const ingredientsArray = ingredientsString
        .split(",")
        .map((ingredient) => ingredient.trim());
      this.updateRecipes(ingredientsArray);
    });

    document.addEventListener("ustensilsFiltered", (e) => {
      const ustensilsString = e.detail.ustensils.trim();
      const ustensilsArray = ustensilsString
        .split(",")
        .map((ustensil) => ustensil.trim());
      console.log("Ustensiles filtrés :", ustensilsArray);
      this.updateRecipes(ustensilsArray);
    });

    document.addEventListener("appliancesFiltered", (e) => {
      const appliancesString = e.detail.appliances.trim();
      const appliancesArray = appliancesString
        .split(",")
        .map((appliance) => appliance.trim());
      console.log("Appareils filtrés :", appliancesArray);
      this.updateRecipes(appliancesArray);
    });
  }

  filterRecipes(searchValue) {
    return this.Recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchValue) ||
        recipe.description.toLowerCase().includes(searchValue) ||
        recipe.ingredients.some((ing) =>
          ing.ingredient.toLowerCase().includes(searchValue)
        )
    );
  }

  emitRecipeFilteredEvent(filteredRecipes) {
    // Création de l'événement personnalisé
    const event = new CustomEvent("recipesFiltered", {
      detail: { recipes: filteredRecipes },
    });
    document.dispatchEvent(event); // Déclenchement de l'événement sur l'objet document
  }

  quickSort(array, key) {
    if (array.length <= 1) return array;

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
      if (i === Math.floor(array.length / 2)) continue;

      let pivotValue;
      let currentValue;

      if (key === "ingredients") {
        pivotValue = pivot[key]
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(" ");
        currentValue = array[i][key]
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(" ");
      } else {
        pivotValue = pivot[key].toLowerCase();
        currentValue = array[i][key].toLowerCase();
      }

      if (currentValue < pivotValue) left.push(array[i]);
      else right.push(array[i]);
    }

    return this.quickSort(left, key).concat(pivot, this.quickSort(right, key));
  }

  onSearchRecipes(searchValue) {
    if (!searchValue) {
      this.loadAllRecipes(this.Recipes);
      return;
    }

    if (searchValue.length < 3) {
      this.updateRecipes(this.Recipes);
      this.updateRecipesNumber(this.Recipes);
      this.updateDropdowns(this.Recipes);
      return;
    }

    const recipesFiltered = this.Recipes.filter((recipe) => {
      return (
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(searchValue)
        ) ||
        recipe.description.toLowerCase().includes(searchValue) ||
        recipe.name.toLowerCase().includes(searchValue) ||
        recipe.appliance.toLowerCase().includes(searchValue) ||
        recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(searchValue)
        )
      );
    });

    if (!recipesFiltered.length) {
      this.displayNoResultMessage(searchValue);
    } else {
      const sortedRecipes = this.quickSort(recipesFiltered, "name");
      this.updateRecipes(sortedRecipes);
      this.updateRecipesNumber(sortedRecipes);
      this.updateDropdowns(sortedRecipes);
    }
  }

  displayNoResultMessage(searchValue) {
    const $inputSearchWrapper = document.querySelector(".input-search-wrapper");
    let $noResult = document.querySelector(".no-result-message");
    if (!$noResult) {
      $noResult = document.createElement("div");
      $noResult.classList.add(
        "no-result-message",
        "text-center",
        "text-2xl",
        "mt-10",
        "justify-center",
        "flex",
        "text-gray-300"
      );
      $inputSearchWrapper.appendChild($noResult);
    }

    $noResult.textContent = `Aucune recette ne correspond à votre critère ${searchValue}. Vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
  }

  removeNoResultMessage() {
    const $noResult = document.querySelector(".no-result-message");
    if ($noResult) $noResult.remove();
  }

  loadAllRecipes() {
    this.updateRecipes(this.Recipes);
    this.updateRecipesNumber(this.Recipes);
    this.removeNoResultMessage(); // Assurez-vous de retirer le message lorsque toutes les recettes sont chargées
  }

  updateRecipes(recipesFiltered) {
    const $recipesWrapper = document.querySelector(".recipes-wrapper");
    $recipesWrapper.innerHTML = "";

    const fragment = document.createDocumentFragment();
    recipesFiltered.forEach((recipe) => {
      const recipeCard = new RecipeCard(recipe);
      fragment.appendChild(recipeCard.createRecipeCard());
    });

    $recipesWrapper.appendChild(fragment);
  }

  updateRecipesNumber(recipesFiltered) {
    const $recipesNumber = document.querySelector(".recipes-number-wrapper");
    $recipesNumber.textContent = `${recipesFiltered.length} Recettes`;
  }

  updateDropdowns(recipesFiltered) {
    this.dropdownFilters.forEach((dropdownFilter) => {
      if (dropdownFilter instanceof DropdownFilterIngredients) {
        dropdownFilter.updateDropdownIngredients(recipesFiltered);
      } else if (dropdownFilter instanceof DropdownFilterUstensils) {
        dropdownFilter.updateDropdownUstensils(recipesFiltered);
      } else if (dropdownFilter instanceof DropdownFilterAppliances) {
        dropdownFilter.updateDropdownAppliances(recipesFiltered);
      }
    });
  }

  createInputSearchGlobal() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add(
      "input-search-wrapper",
      "w-2/3",
      "h-auto",
      "relative"
    );

    const inputSearch = `
        <input
            class="relative w-full h-14 px-6 py-4 mt-4 focus:placeholder-white text-black bg-white rounded-lg focus:outline-none font-['Manrope'] font-normal"
            type="search"
            name="search recipes"
            id="search-recipes"
            placeholder="Rechercher une recette, un ingrédient, ..."
        />
        <button
            id="button-search-recipes"
            class="absolute top-6 right-2 bg-black hover:bg-amber-300 p-2 w-10 h-10 rounded-lg"
        >
          <img
              src="./src/assets/icon/icon-loop.svg"
              alt="icon icon-loop"
          />
        </button>
        <button
              id="clear-search-recipes"
              class="absolute top-7 right-16 text-lg text-gray-300 hidden"
        >
          X
        </button>
      `;

    $wrapper.innerHTML = inputSearch;

    $wrapper
      .querySelector("#clear-search-recipes")
      .addEventListener("click", () => {
        const $inputSearch = document.getElementById("search-recipes");
        $inputSearch.value = "";
        this.loadAllRecipes();
        this.removeNoResultMessage();
      });

    $wrapper
      .querySelector("#button-search-recipes")
      .addEventListener("click", () => {
        this.onSearchRecipes();
      });

    return $wrapper;
  }
}
