/** Fonction pour afficher le contenu de 'ingrédients' pour nos cards. **/
/* getIngredients is used on our factory 'getRecipeCard' */

function getIngredients(ingredients) {
  const column = document.createElement("div");
  column.classList.add("grid", "grid-cols-2", "gap-4");

  for (const ingredient of ingredients) {
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
    ingredientDetails.textContent = `${
      ingredient.quantity ? ingredient.quantity : ""
    } ${ingredient.unit ? ingredient.unit : ""}`;

    ingredientContainer.appendChild(ingredientName);
    ingredientContainer.appendChild(ingredientDetails);
    column.appendChild(ingredientContainer);
  }

  return column;
}

/** Fonction pour créer l'image de la recette **/
/* getImage is used on our factory 'getRecipeCard' */

function getImage(imageUrl, altText) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "src/assets/pictures/" + imageUrl);
  imgElement.setAttribute("alt", altText);
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
function getRecipeCard(data) {
  const {
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
    image,
  } = data;

  const article = document.createElement("article");
  article.setAttribute("id", id);
  article.setAttribute("servings", servings);
  article.classList.add(
    "rounded-[21px]",
    "shadow",
    "relative",
    "recipe-card",
    "w-full",
    "h-[740px]",
    "bg-white"
  );

  const imgElement = getImage(image, name);

  const blankImage = document.createElement("div");
  blankImage.classList.add("blank-space");

  const recipeName = document.createElement("h2");
  recipeName.textContent = name;
  recipeName.className = "nom";
  recipeName.classList.add(
    "text-black",
    "text-lg",
    "font-normal",
    "font-['Anton']",
    "mt-4"
  );

  const recipeDuration = document.createElement("div");
  recipeDuration.textContent = `${time} min`;
  recipeDuration.className = "durée";
  recipeDuration.classList.add(
    "text-center",
    "text-zinc-900",
    "text-xs",
    "font-normal",
    "font-['Manrope']",
    "bg-amber-300",
    "rounded-[14px]",
    "absolute",
    "top-4",
    "right-4",
    "px-[15px]",
    "py-[5px]"
  );

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("informations");
  cardInfo.setAttribute("appliance", appliance);
  cardInfo.setAttribute("ustensils", ustensils);
  cardInfo.classList.add("px-4", "py-4");

  /* getIngredients est définit en début de page */
  const recipeIngredients = getIngredients(ingredients);

  const recipeDescription = document.createElement("p");
  recipeDescription.textContent = description;
  recipeDescription.className = "description";
  recipeDescription.classList.add(
    "h-[80px]",
    "mt-4",
    "mb-5",
    "text-zinc-900",
    "text-sm",
    "font-normal",
    "font-['Manrope']",
    "overflow-hidden",
    "text-ellipsis"
  );

  const hidden = document.createElement("div");
  hidden.classList.add("is-hidden");

  const titleRecipe = document.createElement("h2");
  titleRecipe.textContent = "RECETTE";
  titleRecipe.className = "titre recette"; // A revoir;
  titleRecipe.classList.add(
    "text-neutral-500",
    "mt-6",
    "text-xs",
    "font-bold",
    "font-['Manrope']",
    "uppercase",
    "tracking-wide"
  );

  const titleIngredients = document.createElement("h2");
  titleIngredients.textContent = "INGRÉDIENTS";
  titleIngredients.className = "titre ingredients"; // A revoir
  titleIngredients.classList.add(
    "text-neutral-500",
    "my-6",
    "text-xs",
    "font-bold",
    "font-['Manrope']",
    "uppercase",
    "tracking-wide"
  );

  /* Append section */
  article.appendChild(imgElement);
  article.appendChild(blankImage);
  article.appendChild(recipeDuration);
  article.appendChild(cardInfo);
  cardInfo.appendChild(recipeName);
  cardInfo.appendChild(titleRecipe);
  cardInfo.appendChild(recipeDescription);
  cardInfo.appendChild(titleIngredients);
  cardInfo.appendChild(recipeIngredients);
  article.appendChild(hidden);

  return article;
}
