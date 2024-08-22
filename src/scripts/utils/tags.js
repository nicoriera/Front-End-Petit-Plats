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

// eslint-disable-next-line no-unused-vars
function addTagFilterIngredients() {
  if (tagIngredientAlreadyAdded === false) {
    tagIngredientAlreadyAdded = true;
    Array.from(filterItemIngredients).forEach((element) => {
      element.addEventListener("click", (e) => {
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

        const deleteTagIcon = document.createElement("span");
        deleteTagIcon.classname = "deleteIcon";

        const deleteIconImg = document.createElement("i");
        deleteIconImg.className = "fa-solid fa-x";
        deleteIconImg.classList.add("cursor-pointer", "w-5");

        deleteIconImg.addEventListener("click", () => {
          tagIngredientContainer.remove();
          searchLive();
          return false;
        });
        tagIngredientWrapper.appendChild(tagIngredientContainer);
        tagIngredientContainer.appendChild(tagIngredient);
        tagIngredientContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
        searchLive();

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

  ingredientDropdown.classList.remove("filter__ingredients--view");
  ingredientDropdown.classList.add("filter__ingredients--close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  inputIngredients.style.display = "none";
  ingredientsListBox.style.display = "none";
  ingredientDropdown.style.width = "170px";
  ingredientDropdown.style.height = "auto";
}

/* Appareils */

// eslint-disable-next-line no-unused-vars
function addTagFilterAppliances() {
  if (tagApplianceAlreadyAdded === false) {
    tagApplianceAlreadyAdded = true;
    Array.from(filterItemAppliances).forEach((element) => {
      element.addEventListener("click", (e) => {
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
        deleteTagIcon.addEventListener("click", () => {
          tagApplianceContainer.remove();
          // défini dans search_bar.js
          searchLive();
          return false;
        });
        tagApplianceWrapper.appendChild(tagApplianceContainer);
        tagApplianceContainer.appendChild(tagAppliance);
        tagApplianceContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
        // défini dans search_bar.js
        searchLive();

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

  applianceDropdown.classList.remove("filter__appliances--view");
  applianceDropdown.classList.add("filter__appliances--close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  inputAppliances.style.display = "none";
  appliancesListBox.style.display = "none";
  applianceDropdown.style.width = "170px";
  applianceDropdown.style.height = "auto";
}

/* Ustensils */

// eslint-disable-next-line no-unused-vars
function addTagFilterUstensils() {
  if (tagUstensilAlreadyAdded === false) {
    tagUstensilAlreadyAdded = true;
    Array.from(filterItemUstensils).forEach((element) => {
      element.addEventListener("click", (e) => {
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
        deleteTagIcon.addEventListener("click", () => {
          tagUstensilContainer.remove();
          // défini dans search_bar.js
          searchLive();
          return false;
        });
        tagUstensilWrapper.appendChild(tagUstensilContainer);
        tagUstensilContainer.appendChild(tagUstensil);
        tagUstensilContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
        // défini dans search_bar.js
        searchLive();

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

  ustensilDropdown.classList.remove("filter__ustensils--view");
  ustensilDropdown.classList.add("filter__ustensils--close");
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  inputUstensils.style.display = "none";
  ustensilsListBox.style.display = "none";
  ustensilDropdown.style.width = "170px";
  ustensilDropdown.style.height = "auto";
}

/** TAG FILTRE RECIPES **/

/* filteredRecipesWithTags */
// eslint-disable-next-line no-unused-vars
function filteredRecipesWithTags(recipesToFilter) {
  /* Faire des tableaux des items afficher pour chaque filtre */
  const taggedIngredientsDOM = Array.from(
    document.querySelectorAll(".tag__ingredients--wrapper .tag__ingredient ")
  );

  const taggedAppliancesDOM = Array.from(
    document.querySelectorAll(".tag__appliances--wrapper .tag__appliance ")
  );

  const taggedustensilsDOM = Array.from(
    document.querySelectorAll(".tag__ustensils--wrapper .tag__ustensil")
  );
  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedUstensils = [];

  /* Créer des tableaux avec map contenant le texte de chaque tableau */
  taggedIngredients = taggedIngredientsDOM.map(
    (taggedIngredient) => taggedIngredient.innerText
  );
  taggedAppliances = taggedAppliancesDOM.map(
    (taggedAppliance) => taggedAppliance.innerText
  );
  taggedUstensils = taggedustensilsDOM.map(
    (taggedUstensil) => taggedUstensil.innerText
  );

  /* Définir le tableau recipesToDisplay un filtre de recipes */
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let ustensilIsMatching = false;

    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;

    let ingredientsInTheRecipe = [];
    let appliancesInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    ingredientsInTheRecipe = recipe.ingredients.map(
      ({ ingredient }) => ingredient
    );

    appliancesInTheRecipe.push(recipe.appliance);

    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil);

    if (taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          ingredientsMatching += 1;
        }
      });
    }

    if (taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching += 1;
        }
      });
    }

    if (taggedUstensils.length > 0) {
      taggedUstensils.forEach((taggedUstensil) => {
        if (ustensilsInTheRecipe.includes(taggedUstensil)) {
          ustensilsMatching += 1;
        }
      });
    }

    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    if (taggedAppliances.length > 0) {
      if (appliancesMatching > 0) {
        applianceIsMatching = true;
      }
    } else applianceIsMatching = true;

    if (ustensilsMatching === taggedUstensils.length) {
      ustensilIsMatching = true;
    }

    if (
      ingredientIsMatching === true &&
      applianceIsMatching === true &&
      ustensilIsMatching === true
    ) {
      recipeIsMatching = true;
    }

    return recipeIsMatching;
  });
  // filFilters is defined in filters-fill.js
  fillFilters(recipesToDisplay);
  return recipesToDisplay;
}
