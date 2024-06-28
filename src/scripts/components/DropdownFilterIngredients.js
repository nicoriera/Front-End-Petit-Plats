class DropdownFilterIngredients {
  constructor(dropdown) {
    if (!dropdown || !dropdown.ingredient) {
      throw new Error(
        "Le paramètre 'dropdown' est obligatoire pour instancier un objet DropdownFilterIngredients."
      );
    }
    this._dropdown = { ingredient: dropdown.ingredient };
    this.$dropdownButtons = document.getElementById(
      "dropdown-ingredients-buttons"
    );
    this.setupEventListeners();
    this.loadAllIngredients();
  }

  loadAllIngredients() {
    this.updateDropdownIngredients();
  }

  onSearchIngredients() {
    const $inputSearch = document.getElementById("search-ingredients");

    if (!$inputSearch) {
      console.error("L'élément avec l'ID 'search-ingredients' n'existe pas.");
      return;
    }

    let debounceTimeout;
    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        this.updateDropdownIngredients(searchValue);
      }, 300);
    });
  }

  setupEventListeners() {
    document.addEventListener("recipesFiltered", (e) => {
      const ingredients = this.extractIngredients(e.detail.recipes);
      this.updateDropdownIngredients(ingredients);
    });
  }

  extractIngredients(recipes) {
    const ingredientSet = new Set();
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ing) => {
        ingredientSet.add(ing.ingredient);
      });
    });
    return [...ingredientSet];
  }

  updateDropdownIngredients(ingredients = []) {
    this.$dropdownButtons.innerHTML = ""; // Clear existing buttons

    // Ensure ingredients is an array or split string if not
    const ingredientsList = Array.isArray(ingredients)
      ? ingredients
      : ingredients.split(",").map((ingredient) => ingredient.trim());

    ingredientsList
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .forEach((ingredient) => {
        const $wrapper = this.createDropdownFilterItem(ingredient);
        this.$dropdownButtons.appendChild($wrapper);
      });
  }

  createDropdownFilterItem(ingredient) {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");
    $wrapper.id = "label-ingredient";

    const dropdownFilter = `

   
      ${ingredient}
   
  
    `;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      const ingredientEvent = new CustomEvent("ingredientsFiltered", {
        detail: { ingredients: $wrapper.textContent },
      });
      document.dispatchEvent(ingredientEvent);
      this.updateLabel($wrapper.textContent);
    });
    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(
      "dropdown-label-search-ingredient-value"
    );
    $label.textContent = value;
  }
}
