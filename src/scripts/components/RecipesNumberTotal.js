class RecipesNumberTotal {
  constructor(recipes) {
    this.recipes = recipes;
  }

  createRecipesNumberTotal() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("recipes-number");

    const recipesNumberTotal = `
     
        ${this.recipes.recipesTotal} Recettes
    
    `;

    $wrapper.innerHTML = recipesNumberTotal;
    return $wrapper;
  }
}
