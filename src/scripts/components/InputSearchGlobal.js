class InputSearch {
  constructor(Recipes) {
    this.Recipes = Recipes;
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

  onSearchRecipes() {
    const $inputSearch = document.getElementById("search-recipes");
    $inputSearch.addEventListener("input", async (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      if (!searchValue) {
        this.loadAllRecipes(this.Recipes);
        return;
      }

      if (searchValue.length < 3) {
        this.updateRecipes(this.Recipes);
        this.updateRecipesNumber(this.Recipes);
        return;
      }

      const recipesFiltered = this.Recipes.filter((recipe) => {
        const recipeIngredients = recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(searchValue)
        );
        const recipesDescription = recipe.description
          .toLowerCase()
          .includes(searchValue);
        const recipesName = recipe.name.toLowerCase().includes(searchValue);
        const recipesAppliance = (recipe.appliance || "")
          .toLowerCase()
          .includes(searchValue);
        const recipesUstensils = (recipe.ustensils || []).some((ustensil) =>
          ustensil.toLowerCase().includes(searchValue)
        );

        return (
          recipeIngredients ||
          recipesDescription ||
          recipesName ||
          recipesAppliance ||
          recipesUstensils
        );
      });

      const sortedRecipes = this.quickSort(recipesFiltered, "name");

      this.updateRecipes(sortedRecipes);
      this.updateRecipesNumber(sortedRecipes);
    });
  }

  loadAllRecipes() {
    this.updateRecipes(this.Recipes);
    this.updateRecipesNumber(this.Recipes);
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
              class="absolute top-7 right-16 text-lg text-gray-300"
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
      });

    $wrapper
      .querySelector("#button-search-recipes")
      .addEventListener("click", () => {
        this.onSearchRecipes();
      });

    return $wrapper;
  }
}
