/** Fonction pour afficher le contenu de 'ingrédients' pour nos cards. **/
/* getIngredients is used on our factory 'getRecipeCard' */

function createIngredientElement(ingredient) {
  const ingredientContainer = document.createElement("div");
  ingredientContainer.classList.add("mt-2");

  const ingredientName = document.createElement("div");
  ingredientName.classList.add(
    "text-zinc-900",
    "text-sm",
    "font-medium",
    "font-['Manrope']"
  );
  ingredientName.textContent = ingredient.ingredient;

  const ingredientDetails = document.createElement("div");
  ingredientDetails.classList.add(
    "text-neutral-500",
    "text-sm",
    "font-normal",
    "font-['Manrope']"
  );
  ingredientDetails.textContent = `${ingredient.quantity || ""} ${
    ingredient.unit || ""
  }`;

  ingredientContainer.appendChild(ingredientName);
  ingredientContainer.appendChild(ingredientDetails);

  return ingredientContainer;
}

function getIngredients(ingredients) {
  const column = document.createElement("div");
  column.classList.add("grid", "grid-cols-2", "gap-4");

  ingredients.forEach((ingredient) => {
    const ingredientElement = createIngredientElement(ingredient);
    column.appendChild(ingredientElement);
  });

  return column;
}

/** Fonction pour créer l'image de la recette **/
/* getImage is used on our factory 'getRecipeCard' */

function getImage(imageUrl, altText) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "src/assets/pictures/" + imageUrl);
  imgElement.setAttribute("alt", altText);
  imgElement.setAttribute("loading", "lazy");
  imgElement.classList.add(
    "w-full",
    "h-[253px]",
    "rounded-t-[21px]",
    "object-cover"
  );
  return imgElement;
}

/** Factory qui permet de générer nos cards de Recipes. **/
/* getRecipeCard is used in index.js */
// eslint-disable-next-line no-unused-vars
function createRecipeTitle(name) {
  const recipeName = document.createElement("h2");
  recipeName.textContent = name;
  recipeName.className =
    "nom text-black text-lg font-normal font-['Anton'] mt-4";
  return recipeName;
}

function createRecipeDuration(time) {
  const recipeDuration = document.createElement("div");
  recipeDuration.textContent = `${time} min`;
  recipeDuration.className =
    "durée text-center text-zinc-900 text-xs font-normal font-['Manrope'] bg-amber-300 rounded-[14px] absolute top-4 right-4 px-[15px] py-[5px]";
  return recipeDuration;
}

function createRecipeDescription(description) {
  const recipeDescription = document.createElement("p");
  recipeDescription.textContent = description;
  recipeDescription.className =
    "description h-[80px] mt-4 mb-5 text-zinc-900 text-sm font-normal font-['Manrope'] overflow-hidden text-ellipsis";
  return recipeDescription;
}

function createRecipeHeaders() {
  const titleRecipe = document.createElement("h2");
  titleRecipe.textContent = "RECETTE";
  titleRecipe.className =
    "titre recette text-neutral-500 mt-6 text-xs font-bold font-['Manrope'] uppercase tracking-wide";

  const titleIngredients = document.createElement("h2");
  titleIngredients.textContent = "INGRÉDIENTS";
  titleIngredients.className =
    "titre ingredients text-neutral-500 my-6 text-xs font-bold font-['Manrope'] uppercase tracking-wide";

  return { titleRecipe, titleIngredients };
}

function getRecipeCard(data) {
  const { id, servings, appliance, ustensils } = data;

  const article = createArticleElement(id, servings);
  const cardInfo = createCardInfo(appliance, ustensils);

  // Append elements to article
  appendElementsToArticle(article, data, cardInfo);

  const hidden = createHiddenElement();
  article.appendChild(hidden);

  return article;
}

function createArticleElement(id, servings) {
  const article = document.createElement("article");
  article.setAttribute("id", id);
  article.setAttribute("servings", servings);
  article.className =
    "rounded-[21px] shadow relative recipe-card w-full h-[740px] bg-white";
  return article;
}

function createCardInfo(appliance, ustensils) {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("informations", "px-4", "py-4");
  cardInfo.setAttribute("appliance", appliance);
  cardInfo.setAttribute("ustensils", ustensils);
  return cardInfo;
}

function appendElementsToArticle(article, data, cardInfo) {
  const { image, name, time, description, ingredients } = data;

  const imgElement = getImage(image, name);
  const recipeDuration = createRecipeDuration(time);
  const recipeName = createRecipeTitle(name);
  const recipeDescription = createRecipeDescription(description);
  const { titleRecipe, titleIngredients } = createRecipeHeaders();
  const recipeIngredients = getIngredients(ingredients);

  article.appendChild(imgElement);
  article.appendChild(recipeDuration);
  cardInfo.appendChild(recipeName);
  cardInfo.appendChild(titleRecipe);
  cardInfo.appendChild(recipeDescription);
  cardInfo.appendChild(titleIngredients);
  cardInfo.appendChild(recipeIngredients);
  article.appendChild(cardInfo);
}

function createHiddenElement() {
  const hidden = document.createElement("div");
  hidden.classList.add("is-hidden");
  return hidden;
}
