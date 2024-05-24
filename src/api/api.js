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
  constructor(url) {
    super(url);
    this.data = null;
  }

  async fetchData() {
    if (!this.data) {
      this.data = await this.get();
    }
    return this.data;
  }

  async getRecipes() {
    return await this.fetchData();
  }

  async getDropdownFilters() {
    return await this.fetchData();
  }
}
