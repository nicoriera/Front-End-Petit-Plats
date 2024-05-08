class App {
  constructor() {
    // DOM

    // Recipes Wrapper
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");

    // Dropdown Filters
    this.$dropdownFilterIngredients = document.getElementById(
      "dropdown-ingredients"
    );
    this.$dropdownFiltersAplliances = document.getElementById(
      "dropdown-appliances"
    );
    this.$dropdownFiltersUstensils =
      document.getElementById("dropdown-ustensils");

    // Recipes Number
    this.$recipesNumberWrapper = document.querySelector(
      ".recipes-number-wrapper"
    );

    // API
    this.recipesApi = new RecipeApi("src/data/recipes.json");
  }

  async main() {
    const recipesData = await this.recipesApi.getRecipes();
    const dropdownFiltersData = await this.recipesApi.getDropdownFilters();

    // Models

    const Recipes = recipesData.map((recipe) => new Recipe(recipe));

    const recipesNumber = new RecipesNumberTotal(recipesData);
    console.log(recipesNumber, "recipesNumber");

    // Components

    const DropdownFilterApllianceData = dropdownFiltersData.map(
      (dropdown) => new DropdownAppliance(dropdown, "appliance")
    );

    const DropdownFilterIngredientsData = dropdownFiltersData.map(
      (dropdown) => new DropdownIngredients(dropdown, "ingredients")
    );

    const DropdownFilterUstensilsData = dropdownFiltersData.map(
      (dropdown) => new DropdownUstensils(dropdown, "ustensils")
    );

    recipesData;
    Recipes.forEach((recipe) => {
      const recipeCard = new RecipeCard(recipe);
      this.$recipesWrapper.appendChild(recipeCard.createRecipeCard());
    });

    this.$recipesNumberWrapper.appendChild(
      recipesNumber.createRecipesNumberTotal()
    );

    dropdownFiltersData;
    DropdownFilterApllianceData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownFilterAplliances(dropdown);
      this.$dropdownFiltersAplliances.appendChild(
        dropdownFilterComponent.createDropdownFilterAplliances()
      );
    });

    DropdownFilterIngredientsData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownFilterIngredients(dropdown);
      this.$dropdownFilterIngredients.appendChild(
        dropdownFilterComponent.createDropdownFilterIngredients()
      );
    });

    DropdownFilterUstensilsData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownFilterUstensils(dropdown);
      this.$dropdownFiltersUstensils.appendChild(
        dropdownFilterComponent.createDropdownFilterUstensils()
      );
    });
  }
}

const app = new App();
app.main();
