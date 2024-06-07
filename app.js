import { inputManager } from "./src/scripts/helpers/inputManager.js";
import RecipeApi from "./src/scripts/api/api.js";
import Recipe from "./src/scripts/models/Recipe.js";
import RecipeCard from "./src/scripts/components/RecipeCard.js";
import RecipesNumberTotal from "./src/scripts/components/RecipesNumberTotal.js";
import InputSearch from "./src/scripts/components/InputSearchGlobal.js";
import DropdownFilterAppliances from "./src/scripts/components/DropdownFilterAppliances.js";
import DropdownIngredients from "./src/scripts/components/DropdownFilterIngredients.js";
import DropdownUstensils from "./src/scripts/components/DropdownFilterUstensils.js";
import DropdownAppliances from "./src/scripts/models/DropdownAppliances.js";
import DropdownIngredients from "./src/scripts/models/DropdownIngredients.js";
import DropdownUstensils from "./src/scripts/models/DropdownUstensils.js";

class App {
  constructor() {
    // DOM

    // Recipes Wrapper
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");

    // Dropdown Filters
    this.$dropdownFilterIngredients = document.getElementById(
      "dropdown-ingredients-buttons"
    );
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

    // Input Search Global
    this.$inputSearchGlobalWrapper = document.querySelector(".recipes-search");

    // API
    this.recipesApi = new RecipeApi("src/data/recipes.json");
  }

  async main() {
    // Récupération des données
    const recipesData = await this.recipesApi.getRecipes();
    const dropdownFiltersData = await this.recipesApi.getDropdownFilters();

    // Initialisation des composants

    // Création des cartes de recettes
    const recipes = recipesData.map((recipe) => new Recipe(recipe));
    recipes.forEach((recipe) => {
      const recipeCard = new RecipeCard(recipe);
      this.$recipesWrapper.appendChild(recipeCard.createRecipeCard());
    });

    // Affichage du nombre total de recettes
    const recipesNumber = new RecipesNumberTotal(recipesData);
    this.$recipesNumberWrapper.appendChild(
      recipesNumber.createRecipesNumberTotal()
    );

    // Gestion de la recherche globale
    const inputSearch = new InputSearch(recipes);
    this.$inputSearchGlobalWrapper.appendChild(
      inputSearch.createInputSearchGlobal()
    );
    inputSearch.onSearchRecipes();

    // Configuration des écouteurs d'événements pour les champs de saisie
    inputManager.setupSearchRecipeListeners();

    // Gestion des dropdowns
    this.setupDropdownFilters(dropdownFiltersData);
  }

  setupDropdownFilters(dropdownFiltersData) {
    // Gestion des Dropdowns Appliances
    const uniqueDropdownFilterApplianceData = [
      ...new Set(
        dropdownFiltersData.map((dropdown) => dropdown.appliance.toLowerCase())
      ),
    ].map(
      (appliance) => appliance.charAt(0).toUpperCase() + appliance.slice(1)
    );

    uniqueDropdownFilterApplianceData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownAppliances(
        dropdown,
        "appliance"
      );
      this.$dropdownFiltersAplliances.appendChild(
        dropdownFilterComponent.createDropdownFilterAppliances()
      );
      dropdownFilterComponent.onSearchAppliances();
    });

    // Gestion des Dropdowns Ingredients
    const allIngredients = dropdownFiltersData
      .map((dropdown) => dropdown.ingredients)
      .flat();
    const uniqueDropdownFilterIngredientData = [
      ...new Set(allIngredients.map((ingredient) => ingredient.toLowerCase())),
    ].map(
      (ingredient) => ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
    );

    uniqueDropdownFilterIngredientData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownIngredients(
        dropdown,
        "ingredients"
      );
      this.$dropdownFilterIngredients.appendChild(
        dropdownFilterComponent.createDropdownFilterIngredients()
      );
      dropdownFilterComponent.onSearchIngredients();
    });

    // Gestion des Dropdowns Ustensils
    const allUstensils = dropdownFiltersData
      .map((dropdown) => dropdown.ustensils)
      .flat();
    const uniqueDropdownFilterUstensilsData = [
      ...new Set(allUstensils.map((ustensil) => ustensil.toLowerCase())),
    ].map((ustensil) => ustensil.charAt(0).toUpperCase() + ustensil.slice(1));

    uniqueDropdownFilterUstensilsData.forEach((dropdown) => {
      const dropdownFilterComponent = new DropdownUstensils(
        dropdown,
        "ustensils"
      );
      this.$dropdownFiltersUstensils.appendChild(
        dropdownFilterComponent.createDropdownFilterUstensils()
      );
      dropdownFilterComponent.onSearchUstensils();
    });
  }
}

const app = new App();
app.main();
