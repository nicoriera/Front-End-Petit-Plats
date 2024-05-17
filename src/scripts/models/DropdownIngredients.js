class DropdownIngredients {
  constructor(data) {
    this._ingredients = data.ingredients;
    this._ingredient = data.ingredient;
  }

  get ingredient() {
    const arrayIngredients = this._ingredients.map(
      (ingredient) => ingredient.ingredient
    );

    return arrayIngredients;
  }
}
