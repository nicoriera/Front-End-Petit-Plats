class App {
  constructor() {
    this.$recipesWrapper = document.querySelector(".recipes-wrapper");
    this.recipesApi = new RecipeApi("src/data/recipes.json");
    console.log(this.recipesApi, "this.recipesApi");
    console.log(this.$recipesWrapper, "this.$recipesWrapper");
  }

  async main() {
    const recipesData = await this.recipesApi.getRecipes();

    recipesData
      .map((recipe) => new Recipe(recipe))
      .forEach((recipe) => {
        const recipeCard = new RecipeCard(recipe);
        this.$recipesWrapper.appendChild(recipeCard.createRecipeCard());
      });
  }
}

const app = new App();
app.main();
