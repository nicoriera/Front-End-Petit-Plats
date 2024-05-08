class RecipesTotal {
  constructor(data) {
    this._recipes = data.recipes;
  }

  get recipesTotal() {
    return this._recipes;
  }
}
