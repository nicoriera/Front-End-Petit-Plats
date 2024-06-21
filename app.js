class App {
  constructor() {
    // Recipes Wrapper
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");

    // Dropdown Filters
    this.$dropdownFilterIngredients = document.getElementById(
      "dropdown-ingredients-buttons"
    );
    this.$dropdownFiltersAppliances = document.getElementById(
      "dropdown-appliances-buttons"
    );
    this.$dropdownFiltersUstensils = document.getElementById(
      "dropdown-ustensils-buttons"
    );

    // Recipes Number
    this.$recipesNumberWrapper = document.querySelector(
      ".recipes-number-wrapper"
    );

    // Input Search Global
    this.$inputSearchGlobalWrapper = document.querySelector(".recipes-search");

    // API
    this.recipesApi = new RecipeApi("src/data/recipes.json");
  }

  async main() {
    // Chargement des données des recettes depuis l'API
    const recipesData = await this.recipesApi.getRecipes();

    // Création des instances de recettes
    const Recipes = recipesData.map((recipe) => new Recipe(recipe));

    // Initialisation du nombre de recettes
    const recipesNumber = new RecipesNumberTotal(Recipes);
    this.$recipesNumberWrapper.appendChild(
      recipesNumber.createRecipesNumberTotal()
    );

    // Initialisation de l'InputSearch avec les recettes
    const inputSearch = new InputSearch(Recipes);
    this.$inputSearchGlobalWrapper.appendChild(
      inputSearch.createInputSearchGlobal()
    );
    inputSearch.setupEventListeners();

    // Setup initial update and display of dropdowns and recipes
    this.updateDropdowns(Recipes);
    this.displayRecipes(Recipes);

    // Attach update functionality to search events
    inputSearch.onSearch = (filteredRecipes) => {
      this.updateDropdowns(filteredRecipes);
      this.displayRecipes(filteredRecipes);
    };
  }

  updateDropdowns(recipes) {
    // Extract unique filter data from filtered recipes
    const uniqueApplianceData = [
      ...new Set(recipes.map((recipe) => recipe.appliance)),
    ];
    const uniqueIngredientsData = [
      ...new Set(recipes.flatMap((recipe) => recipe.ingredients)),
    ];
    const uniqueUstensilsData = [
      ...new Set(recipes.flatMap((recipe) => recipe.ustensils)),
    ];

    // Update dropdowns with unique data
    this.populateAppliancesDropdown(
      this.$dropdownFiltersAppliances,
      uniqueApplianceData
    );
    this.populateIngredientsDropdown(
      this.$dropdownFilterIngredients,
      uniqueIngredientsData
    );
    this.populateUstensilsDropdown(
      this.$dropdownFiltersUstensils,
      uniqueUstensilsData
    );
  }

  populateAppliancesDropdown(dropdown, appliances) {
    dropdown.innerHTML = ""; // Effacer les options existantes
    appliances.forEach((appliance) => {
      const dropdownAppliance = new DropdownAppliance({ appliance });
      const dropdownFilterAppliances = new DropdownFilterAppliances({
        appliance,
      });

      const applianceElement = dropdownAppliance.createDropdownElement(); // Assurez-vous que cette méthode existe
      dropdown.appendChild(applianceElement);

      dropdownFilterAppliances.onSearchAppliances();
      dropdownFilterAppliances.loadAllAppliances();
    });
  }

  populateUstensilsDropdown(dropdown, ustensils) {
    dropdown.innerHTML = ""; // Clear existing options
    ustensils.forEach((ustensil) => {
      const dropdownFilterUstensils = new DropdownFilterUstensils({
        ustensil,
      });
      dropdown.appendChild(dropdownFilterUstensils.createDropdownFilterItem());
      dropdownFilterUstensils.onSearchUstensils();
      dropdownFilterUstensils.loadAllUstensils();
    });
  }

  populateIngredientsDropdown(dropdown, ingredients) {
    dropdown.innerHTML = ""; // Clear existing options
    ingredients.forEach((ingredient) => {
      const dropdownFilterIngredients = new DropdownFilterIngredients({
        ingredient,
      });
      dropdown.appendChild(
        dropdownFilterIngredients.createDropdownFilterItem()
      );
      dropdownFilterIngredients.onSearchIngredients();
    });
  }

  displayRecipes(recipes) {
    this.$recipesWrapper.innerHTML = ""; // Clear existing cards
    recipes.forEach((recipe) => {
      const recipeCard = new RecipeCard(recipe);
      this.$recipesWrapper.appendChild(recipeCard.createRecipeCard());
    });
  }
}

// Instance of App
const app = new App();
app.main();
