/** searchLive est défini dans search_bar.js **/
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

/** Fonction générique pour ajouter des tags pour les filtres **/

function addTagFilter(
  type,
  alreadyAdded,
  filterItems,
  wrapper,
  dropdownCloseFunc
) {
  if (!alreadyAdded) {
    alreadyAdded = true;
    Array.from(filterItems).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const tagContainer = createTagContainer(`tag__${type}`);
        const tagElement = createTagElement(e.target.innerText);
        const deleteTagIcon = createDeleteTagIcon();

        deleteTagIcon.addEventListener("click", (e) => {
          e.preventDefault();
          tagContainer.remove();
          searchLive();
          return false;
        });

        tagContainer.appendChild(tagElement);
        tagContainer.appendChild(deleteTagIcon);
        wrapper.appendChild(tagContainer);

        searchLive();
        dropdownCloseFunc();
      });
    });
  }
}

/* Ajouter des tags spécifiques */
addTagFilter(
  "ingredient",
  tagIngredientAlreadyAdded,
  filterItemIngredients,
  tagIngredientWrapper,
  closeIngredientDropdown
);
addTagFilter(
  "appliance",
  tagApplianceAlreadyAdded,
  filterItemAppliances,
  tagApplianceWrapper,
  closeApplianceDropdown
);
addTagFilter(
  "ustensil",
  tagUstensilAlreadyAdded,
  filterItemUstensils,
  tagUstensilWrapper,
  closeUstensilDropdown
);

/** Création des conteneurs et éléments de tag **/

function createTagContainer(className) {
  const tagContainer = document.createElement("div");
  tagContainer.setAttribute("class", className);
  tagContainer.classList.add(
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
  return tagContainer;
}

function createTagElement(text) {
  const tagElement = document.createElement("p");
  tagElement.innerText = text;
  return tagElement;
}

function createDeleteTagIcon() {
  const deleteTagIcon = document.createElement("span");
  deleteTagIcon.className = "deleteIcon";

  const deleteIconImg = document.createElement("i");
  deleteIconImg.className = "fa-solid fa-x";
  deleteIconImg.classList.add("cursor-pointer", "w-5");

  deleteTagIcon.appendChild(deleteIconImg);

  return deleteTagIcon;
}

/** Fonction générique pour fermer les dropdowns **/

function closeDropdown(dropdownSelector) {
  const dropdown = document.querySelector(dropdownSelector);
  const arrowDown = dropdown.querySelector(".fa-angle-down");
  const arrowUp = dropdown.querySelector(".fa-angle-up");
  const input = dropdown.querySelector("input");
  const listBox = dropdown.querySelector("ul");
  const clearButton = dropdown.querySelector("button");

  dropdown.classList.remove("view");
  dropdown.classList.add("close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  input.style.display = "none";
  listBox.style.display = "none";
  dropdown.style.width = "170px";
  dropdown.style.height = "auto";
  clearButton.style.display = "none";
}

/* Fermeture des dropdowns spécifiques */
function closeIngredientDropdown() {
  closeDropdown(".filter__ingredients--view");
}

function closeApplianceDropdown() {
  closeDropdown(".filter__appliances--view");
}

function closeUstensilDropdown() {
  closeDropdown(".filter__ustensils--view");
}

/** Filtrage des recettes avec les tags **/

function getTaggedItems(wrapperClass) {
  return Array.from(document.querySelectorAll(`${wrapperClass} p`)).map((tag) =>
    tag.innerText.toLowerCase()
  );
}

function matchesTags(tags, items) {
  return tags.every((tag) => items.includes(tag));
}

function filteredRecipesWithTags(recipesToFilter) {
  const taggedIngredients = getTaggedItems(".tag__ingredients--wrapper");
  const taggedAppliances = getTaggedItems(".tag__appliances--wrapper");
  const taggedUstensils = getTaggedItems(".tag__ustensils--wrapper");

  return recipesToFilter.filter((recipe) => {
    const ingredientsInRecipe = recipe.ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    const applianceInRecipe = recipe.appliance.toLowerCase();
    const ustensilsInRecipe = recipe.ustensils.map((ust) => ust.toLowerCase());

    return (
      matchesTags(taggedIngredients, ingredientsInRecipe) &&
      (taggedAppliances.length === 0 ||
        taggedAppliances.includes(applianceInRecipe)) &&
      matchesTags(taggedUstensils, ustensilsInRecipe)
    );
  });
}
