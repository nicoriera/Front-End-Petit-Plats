class DropdownIngredients {
  constructor(data) {
    this._ingredients = data.ingredients;
    this._ingredient = data.ingredient;
  }

  get ingredients() {
    return this._ingredients;
  }

  get ingredient() {
    return this._ingredients.map((ingredient) => ingredient.ingredient);
  }
}
