import { RecipeApi } from "./src/api/api.js";
import { ViewRecipes } from "./src/scripts/view/recipesView.js"; // Import depuis index.js
import { ControllerRecipes } from "./src/scripts/controller/recipeController.js"; // Import depuis index.js
import { Recipes } from "./src/scripts/models/recipeModel.js"; // Import depuis index.js

class App {
  constructor() {
    // DOM Elements
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");
    this.$dropdownFilterIngredients = document.getElementById(
      "dropdown-ingredients-buttons"
    );
    this.$dropdownFiltersAplliances = document.getElementById(
      "dropdown-appliances-buttons"
    );
    this.$dropdownFiltersUstensils = document.getElementById(
      "dropdown-ustensils-buttons"
    );
    this.$inputSearchGlobalWrapper = document.getElementById(
      "input-search-global"
    );
    this.$recipesNumberWrapper = document.getElementById("recipes-number");

    // Initialisation des données
    this.recipesToShow = [];
    this.ingredientArray = [];
    this.applianceArray = [];
    this.ustensilsArray = [];

    // Initialisation des composants
    this.init();
  }

  init() {
    // Récupération des recettes depuis l'API (ou importation directe des recettes)
    // Remplacer par `RecipeApi.getRecipes()` si on utilise une API
    const recipesData = RecipeApi.getRecipes();
    this.recipesToShow = recipesData.slice();

    // Création des instances de contrôleur et de vue
    const controller = new ControllerRecipes(new Recipes(this.recipesToShow));
    this.ingredientArray = controller.getBaseIngredients();
    this.applianceArray = controller.getBaseAppliances();
    this.ustensilsArray = controller.getBaseUstensils();

    // Affichage des recettes et des boutons de filtre
    const recipesDisplay = new ViewRecipes();
    recipesDisplay.displayRecipesList(this.recipesToShow);
    recipesDisplay.displayButtonLists(
      this.ingredientArray,
      this.applianceArray,
      this.ustensilsArray
    );

    // Gestion des événements de sélection/désélection des tags
    controller.handleTagSelected();
    controller.handleTagUnSelected();

    // Recherche principale
    controller.mainSearch();

    // Affichage des composants additionnels (si nécessaire)
    this.renderAdditionalComponents();
  }

  renderAdditionalComponents() {
    // Affichage du nombre total de recettes
    const recipesNumber = new RecipesNumber(this.recipesToShow.length);
    this.$recipesNumberWrapper.appendChild(
      recipesNumber.createRecipesNumberTotal()
    );

    // Affichage du champ de recherche global
    const inputSearch = new InputSearch();
    this.$inputSearchGlobalWrapper.appendChild(
      inputSearch.createInputSearchGlobal()
    );
    inputSearch.searchRecipes();
    inputSearch.setupEventListeners();

    // Affichage des filtres déroulants pour les ingrédients
    this.ingredientArray.forEach((ingredient) => {
      const dropdownFilterComponent = new DropdownFilterIngredients(ingredient);
      this.$dropdownFilterIngredients.appendChild(
        dropdownFilterComponent.createDropdownFilterIngredients()
      );
      dropdownFilterComponent.onSearchIngredients();
    });

    // Affichage des filtres déroulants pour les appareils
    this.applianceArray.forEach((appliance) => {
      const dropdownFilterComponent = new DropdownFilterAppliances(appliance);
      this.$dropdownFiltersAplliances.appendChild(
        dropdownFilterComponent.createDropdownFilterAppliances()
      );
      dropdownFilterComponent.onSearchAppliances();
    });

    // Affichage des filtres déroulants pour les ustensiles
    this.ustensilsArray.forEach((ustensil) => {
      const dropdownFilterComponent = new DropdownFilterUstensils(ustensil);
      this.$dropdownFiltersUstensils.appendChild(
        dropdownFilterComponent.createDropdownFilterUstensils()
      );
      dropdownFilterComponent.onSearchUstensils();
    });
  }

  main() {
    // Toute autre initialisation ou configuration nécessaire
  }
}

const app = new App();
app.main();
