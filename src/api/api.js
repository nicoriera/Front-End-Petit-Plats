class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this.url = url;
  }

  async get() {
    return fetch(this.url)
      .then((res) => res.json())
      .catch((err) => console.log("an error occurs", err));
  }
}

class RecipeApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getRecipes() {
    return await this.get();
  }

  async getDropdownFilters() {
    return await this.get();
  }
}
