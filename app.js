class App {
  constructor() {
    // DOM

    // Recipes Wrapper
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");

    // Dropdown Filters
    this.$dropdownFilterIngredients = document.getElementById(
      "dropdown-ingredients-buttons"
    );
    console.log(this.$dropdownFilterIngredients);
    this.$dropdownFiltersAplliances = document.getElementById(
      "dropdown-appliances-buttons"
    );
    this.$dropdownFiltersUstensils = document.getElementById(
      "dropdown-ustensils-buttons"
    );

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

    // Components

    // Appliance

    const DropdownFilterApllianceData = dropdownFiltersData.map(
      (dropdown) => new DropdownAppliance(dropdown, "appliance")
    );

    const uniqueDropdownFilterApplianceData =
      DropdownFilterApllianceData.filter((value, index, self) => {
        const _self = self.map((v) => JSON.stringify(v));
        return _self.indexOf(JSON.stringify(value)) === index;
      });

    // Ingredients

    const DropdownFilterIngredientsData = dropdownFiltersData.map(
      (dropdown) => new DropdownIngredients(dropdown, "ingredients")
    );
    const ingredients = DropdownFilterIngredientsData.map(
      (ingredient) => ingredient.ingredient
    );

    const allIngredients = ingredients.flat();

    const uniqueDropdownFilterIngredientData = allIngredients.filter(
      (value, index, self) => {
        const lowerCaseSelf = self.map((v) => v.toLowerCase());
        return lowerCaseSelf.indexOf(value.toLowerCase()) === index;
      }
    );

    // Ustensils

    const DropdownFilterUstensilsData = dropdownFiltersData.map(
      (dropdown) => new DropdownUstensils(dropdown, "ustensils")
    );

    const ustensils = DropdownFilterUstensilsData.map(
      (ustensil) => ustensil.ustensil
    );

    const allUstensils = ustensils.flat();

    const uniqueDropdownFilterUstensilsData = allUstensils
      .filter((value, index, self) => {
        const lowerCaseSelf = self.map((v) => v.toLowerCase());
        return lowerCaseSelf.indexOf(value.toLowerCase()) === index;
      })
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1));

    // Rendering

    recipesData;
    Recipes.forEach((recipe) => {
      const recipeCard = new RecipeCard(recipe);
      this.$recipesWrapper.appendChild(recipeCard.createRecipeCard());
    });

    this.$recipesNumberWrapper.appendChild(
      recipesNumber.createRecipesNumberTotal()
    );

    dropdownFiltersData;
    uniqueDropdownFilterApplianceData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownFilterAplliances(dropdown);
      this.$dropdownFiltersAplliances.appendChild(
        dropdownFilterComponent.createDropdownFilterAplliances()
      );
    });

    uniqueDropdownFilterIngredientData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownFilterIngredients(dropdown);
      this.$dropdownFilterIngredients.appendChild(
        dropdownFilterComponent.createDropdownFilterIngredients()
      );
    });

    uniqueDropdownFilterUstensilsData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownFilterUstensils(dropdown);
      this.$dropdownFiltersUstensils.appendChild(
        dropdownFilterComponent.createDropdownFilterUstensils()
      );
    });
  }
}

const app = new App();
app.main();
