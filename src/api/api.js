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
}

// let recipesData = null;

// const fetchRecipes = async () => {
//   try {
//     const response = await fetch("src/data/recipes.json");
//     if (!response.ok) {
//       throw new Error("HTTP error! status: " + response.status);
//     }
//     recipesData = await response.json();
//     return recipesData;
//   } catch (error) {
//     console.error("Erreur:", error);
//   }
// };

// const initializeRecipes = async () => {
//   try {
//     recipesData = await fetchRecipes();
//     console.log(recipesData);
//   } catch (error) {
//     console.error("Erreur:", error);
//   }
// };

// initializeRecipes();
