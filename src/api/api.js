class Api {
  /**
   * Create a new API service.
   * @param {string} url - The endpoint URL.
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * Fetch data from the API.
   * @returns {Promise<Object>} The JSON response.
   */
  async get() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      console.error("An error occurred while fetching data:", err);
      throw err; // Rethrowing the error is generally a good practice if you catch it locally but can't handle it.
    }
  }
}

class RecipeApi extends Api {
  /**
   * Create a new Recipe API service.
   * @param {string} url - The endpoint URL.
   */
  constructor(url) {
    super(url);
    this.data = null;
  }

  /**
   * Fetches or returns cached data.
   * @param {boolean} forceRefresh - If true, forces a refresh of data.
   * @returns {Promise<Object>} The fetched or cached data.
   */
  async fetchData(forceRefresh = false) {
    if (!this.data || forceRefresh) {
      this.data = await this.get();
    }
    return this.data;
  }

  /**
   * Get recipes from API.
   * @returns {Promise<Object>} The recipes data.
   */
  async getRecipes() {
    return await this.fetchData();
  }
}
