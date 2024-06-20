class App {
  constructor() {
    // DOM

    // Recipes Wrapper
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");

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

    // Initialisation de l'InputSearch avec les recettes
    const inputSearch = new InputSearch(Recipes);
    this.$inputSearchGlobalWrapper.appendChild(
      inputSearch.createInputSearchGlobal()
    );
    inputSearch.setupEventListeners();

    // Ajout des recettes à l'interface utilisateur
    Recipes.forEach((recipe) => {
      const recipeCard = new RecipeCard(recipe);
      this.$recipesWrapper.appendChild(recipeCard.createRecipeCard());
    });

    // Affichage du nombre total de recettes
    const recipesNumber = new RecipesNumberTotal(recipesData);
    this.$recipesNumberWrapper.appendChild(
      recipesNumber.createRecipesNumberTotal()
    );

    // Lancement de la recherche globale et chargement de toutes les recettes au démarrage
    inputSearch.onSearchRecipes();
    inputSearch.loadAllRecipes();
  }
}

const app = new App();
app.main();
