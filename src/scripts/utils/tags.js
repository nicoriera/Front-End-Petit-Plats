/** searchLive is defined in search_bar.js **/
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/*** Variables ***/

/** On sélectionne les items dans chaque filtre **/

const filterItemIngredients = document.getElementsByClassName(
  "filter__ingredients--items"
);
const filterItemAppliances = document.getElementsByClassName(
  "filter__appliances--items"
);
const filterItemUstensils = document.getElementsByClassName(
  "filter__ustensils--items"
);

let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstensilAlreadyAdded = false;

/** TAGS WRAPPERS - Conteneur des tags **/

const tagIngredientWrapper = document.querySelector(
  ".tag__ingredients--wrapper"
);
const tagApplianceWrapper = document.querySelector(".tag__appliances--wrapper");
const tagUstensilWrapper = document.querySelector(".tag__ustensils--wrapper");

/*** FUNCTIONS ***/

/** Ajouter des tags pour les filtres **/

/* Ingrédients */
function addTagFilterIngredients() {
  if (tagIngredientAlreadyAdded === false) {
    tagIngredientAlreadyAdded = true;
    Array.from(filterItemIngredients).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const tagIngredientContainer = document.createElement("div");
        tagIngredientContainer.setAttribute("class", "tag__ingredient");
        tagIngredientContainer.classList.add(
          "flex",
          "items-center",
          "justify-between",
          "w-44",
          "bg-amber-300",
          "rounded-lg",
          "p-4",
          "mr-10",
          "mt-6"
        );

        const tagIngredient = document.createElement("p");
        tagIngredient.innerText = e.target.innerText;
        console.log(tagIngredient);

        const deleteTagIcon = document.createElement("span");
        deleteTagIcon.classname = "deleteIcon";

        const deleteIconImg = document.createElement("i");
        deleteIconImg.className = "fa-solid fa-x";
        deleteIconImg.classList.add("cursor-pointer", "w-5");

        deleteIconImg.addEventListener("click", (e) => {
          e.preventDefault();
          tagIngredientContainer.remove();
          searchLive(); // Recalculer la recherche après suppression du tag
          return false;
        });

        tagIngredientContainer.appendChild(tagIngredient);
        tagIngredientContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);

        tagIngredientWrapper.appendChild(tagIngredientContainer);

        searchLive(); // Recalculer la recherche après ajout du tag

        closeIngredientDropdown();
      });
    });
  }
}

function closeIngredientDropdown() {
  const ingredientDropdown = document.querySelector(
    ".filter__ingredients--template"
  );
  const arrowDown = ingredientDropdown.querySelector(".fa-angle-down");
  const arrowUp = ingredientDropdown.querySelector(".fa-angle-up");
  const inputIngredients =
    ingredientDropdown.querySelector("#ingredients-input");
  const ingredientsListBox = ingredientDropdown.querySelector(
    ".filter__ingredients--list"
  );
  const clearIngredientsButton = ingredientDropdown.querySelector(
    ".filter__ingredients--clear-button"
  );

  ingredientDropdown.classList.remove("filter__ingredients--view");
  ingredientDropdown.classList.add("filter__ingredients--close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  inputIngredients.style.display = "none";
  ingredientsListBox.style.display = "none";
  ingredientDropdown.style.width = "170px";
  ingredientDropdown.style.height = "auto";
  clearIngredientsButton.style.display = "none";
}

/* Appareils */
function addTagFilterAppliances() {
  if (tagApplianceAlreadyAdded === false) {
    tagApplianceAlreadyAdded = true;
    Array.from(filterItemAppliances).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const tagApplianceContainer = document.createElement("div");
        tagApplianceContainer.setAttribute("class", "tag__appliance");
        tagApplianceContainer.classList.add(
          "flex",
          "items-center",
          "justify-between",
          "w-44",
          "bg-amber-300",
          "rounded-lg",
          "p-4",
          "mr-10",
          "mt-6"
        );

        const tagAppliance = document.createElement("p");
        tagAppliance.innerText = e.target.innerText;

        const deleteTagIcon = document.createElement("span");
        deleteTagIcon.className = "deleteIcon";

        const deleteIconImg = document.createElement("i");
        deleteIconImg.className = "fa-solid fa-x";
        deleteIconImg.classList.add("cursor-pointer", "w-5");

        deleteIconImg.addEventListener("click", (e) => {
          e.preventDefault();
          tagApplianceContainer.remove();
          searchLive(); // Recalculer la recherche après suppression du tag
          return false;
        });

        tagApplianceContainer.appendChild(tagAppliance);
        tagApplianceContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);

        tagApplianceWrapper.appendChild(tagApplianceContainer);

        searchLive(); // Recalculer la recherche après ajout du tag

        closeApplianceDropdown();
      });
    });
  }
}

function closeApplianceDropdown() {
  const applianceDropdown = document.querySelector(
    ".filter__appliances--template"
  );
  const arrowDown = applianceDropdown.querySelector(".fa-angle-down");
  const arrowUp = applianceDropdown.querySelector(".fa-angle-up");
  const inputAppliances = applianceDropdown.querySelector("#appliances-input");
  const appliancesListBox = applianceDropdown.querySelector(
    ".filter__appliances--list"
  );
  const clearAppliancesButton = applianceDropdown.querySelector(
    ".filter__appliances--clear-button"
  );

  applianceDropdown.classList.remove("filter__appliances--view");
  applianceDropdown.classList.add("filter__appliances--close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  inputAppliances.style.display = "none";
  appliancesListBox.style.display = "none";
  applianceDropdown.style.width = "170px";
  applianceDropdown.style.height = "auto";
  clearAppliancesButton.style.display = "none";
}

/* Ustensiles */
function addTagFilterUstensils() {
  if (tagUstensilAlreadyAdded === false) {
    tagUstensilAlreadyAdded = true;
    Array.from(filterItemUstensils).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const tagUstensilContainer = document.createElement("div");
        tagUstensilContainer.setAttribute("class", "tag__ustensil");
        tagUstensilContainer.classList.add(
          "flex",
          "items-center",
          "justify-between",
          "w-44",
          "bg-amber-300",
          "rounded-lg",
          "p-4",
          "mr-10",
          "mt-6"
        );

        const tagUstensil = document.createElement("p");
        tagUstensil.innerText = e.target.innerText;

        const deleteTagIcon = document.createElement("span");
        deleteTagIcon.className = "deleteIcon";

        const deleteIconImg = document.createElement("i");
        deleteIconImg.className = "fa-solid fa-x";
        deleteIconImg.classList.add("cursor-pointer", "w-5");

        deleteIconImg.addEventListener("click", (e) => {
          e.preventDefault();
          tagUstensilContainer.remove();
          searchLive(); // Recalculer la recherche après suppression du tag
          return false;
        });

        tagUstensilContainer.appendChild(tagUstensil);
        tagUstensilContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);

        tagUstensilWrapper.appendChild(tagUstensilContainer);

        searchLive(); // Recalculer la recherche après ajout du tag

        closeUstensilDropdown();
      });
    });
  }
}

function closeUstensilDropdown() {
  const ustensilDropdown = document.querySelector(
    ".filter__ustensils--template"
  );
  const arrowDown = ustensilDropdown.querySelector(".fa-angle-down");
  const arrowUp = ustensilDropdown.querySelector(".fa-angle-up");
  const inputUstensils = ustensilDropdown.querySelector("#ustensils-input");
  const ustensilsListBox = ustensilDropdown.querySelector(
    ".filter__ustensils--list"
  );
  const clearUstensilsButton = ustensilDropdown.querySelector(
    ".filter__ustensils--clear-button"
  );

  ustensilDropdown.classList.remove("filter__ustensils--view");
  ustensilDropdown.classList.add("filter__ustensils--close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  inputUstensils.style.display = "none";
  ustensilsListBox.style.display = "none";
  ustensilDropdown.style.width = "170px";
  ustensilDropdown.style.height = "auto";
  clearUstensilsButton.style.display = "none";
}

/** TAG FILTRE RECIPES **/

/* filteredRecipesWithTags */
// eslint-disable-next-line no-unused-vars
function filteredRecipesWithTags(recipesToFilter) {
  const taggedIngredientsDOM = Array.from(
    document.querySelectorAll(".tag__ingredients--wrapper .tag__ingredient")
  );

  const taggedAppliancesDOM = Array.from(
    document.querySelectorAll(".tag__appliances--wrapper .tag__appliance")
  );

  const taggedUstensilsDOM = Array.from(
    document.querySelectorAll(".tag__ustensils--wrapper .tag__ustensil")
  );

  const taggedIngredients = taggedIngredientsDOM.map((tag) =>
    tag.innerText.toLowerCase()
  );
  const taggedAppliances = taggedAppliancesDOM.map((tag) =>
    tag.innerText.toLowerCase()
  );
  const taggedUstensils = taggedUstensilsDOM.map((tag) =>
    tag.innerText.toLowerCase()
  );

  return recipesToFilter.filter((recipe) => {
    const ingredientsMatch = taggedIngredients.every((tag) =>
      recipe.ingredients.some((ing) => ing.ingredient.toLowerCase() === tag)
    );
    const applianceMatch =
      taggedAppliances.length === 0 ||
      taggedAppliances.includes(recipe.appliance.toLowerCase());
    const ustensilsMatch = taggedUstensils.every((tag) =>
      recipe.ustensils.includes(tag)
    );

    return ingredientsMatch && applianceMatch && ustensilsMatch;
  });
}
