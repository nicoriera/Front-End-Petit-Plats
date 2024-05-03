class Recipe {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._ingredients = data.ingredients;
    this._ingredient = data.ingredient;
    this._quantity = data.quantity;
    this._unit = data.unit;
    this._description = data.description;
    this._image = data.image;
    this._time = data.time;
  }

  get ingredients() {
    return this._ingredients;
  }

  get ingredient() {
    return this._ingredients.map((ingredient) => ingredient.ingredient);
  }

  get quantity() {
    return this._ingredients.map((ingredient) => ingredient.quantity);
  }

  get unit() {
    return this._ingredients.map((ingredient) => ingredient.unit);
  }

  get image() {
    return `src/assets/pictures/${this._image}`;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get time() {
    return this._time;
  }
}
