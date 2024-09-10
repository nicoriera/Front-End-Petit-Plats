function fillFilters(recipes) {
  const ingredientsBloc = document.querySelector(".filter__ingredients--list");
  const appliancesBloc = document.querySelector(".filter__appliances--list");
  const ustensilsBloc = document.querySelector(".filter__ustensils--list");

  // Clear existing lists
  clearBlocks([ingredientsBloc, appliancesBloc, ustensilsBloc]);

  const ingredientsList = getUniqueItems(
    recipes,
    "ingredient",
    ingredientsBloc,
    ".tag__ingredient"
  );
  const appliancesList = getUniqueItems(
    recipes,
    "appliance",
    appliancesBloc,
    ".tag__appliance"
  );
  const ustensilsList = getUniqueItems(
    recipes,
    "ustensil",
    ustensilsBloc,
    ".tag__ustensil"
  );

  addFilters(ingredientsList, appliancesList, ustensilsList);
}

function clearBlocks(blocks) {
  blocks.forEach((block) => (block.innerHTML = ""));
}

function getUniqueItems(recipes, type, bloc, tagSelector) {
  const tags = [...document.querySelectorAll(tagSelector)].map(
    (tag) => tag.innerText
  );
  const list = [];

  recipes.forEach((recipe) => {
    const items =
      type === "ingredient"
        ? recipe.ingredients.map((i) => i.ingredient)
        : type === "appliance"
        ? [recipe.appliance]
        : recipe.ustensils;

    items.forEach((item) => {
      if (!list.includes(item) && !tags.includes(item)) {
        list.push(item);
        const filterItem = createFilterItem(`filter__${type}s--items`, item);
        bloc.appendChild(filterItem);
      }
    });
  });

  return list;
}

function addFilters(ingredientsList, appliancesList, ustensilsList) {
  addTagFilter(
    "ingredient",
    false,
    filterItemIngredients,
    tagIngredientWrapper,
    closeIngredientDropdown
  );
  addTagFilter(
    "appliance",
    false,
    filterItemAppliances,
    tagApplianceWrapper,
    closeApplianceDropdown
  );
  addTagFilter(
    "ustensil",
    false,
    filterItemUstensils,
    tagUstensilWrapper,
    closeUstensilDropdown
  );
}

function createFilterItem(className, text) {
  const filterItem = document.createElement("li");
  filterItem.classList.add(
    className,
    "cursor-pointer",
    "px-4",
    "py-2",
    "capitalize",
    "hover:bg-amber-300"
  );
  filterItem.innerText = text;
  return filterItem;
}

function getArrow() {
  const arrowDownIngredient = document.querySelector(
    ".filter__ingredients--angleDown"
  );
  const arrowDownAppliance = document.querySelector(
    ".filter__appliances--angleDown"
  );
  const arrowDownUstensil = document.querySelector(
    ".filter__ustensils--angleDown"
  );
}

function isArrowClicked() {
  handleArrowClickForIngredient();
  handleArrowClickForAppliance();
  handleArrowClickForUstensil();
}

function handleArrowClickForIngredient() {
  const arrowDownIngredient = document.querySelector(
    ".filter__ingredients--angleDown"
  );

  arrowDownIngredient.addEventListener("click", (e) => {
    e.preventDefault();
    const applianceCloseElt = document.querySelector(
      ".filter__appliances--view"
    );
    const applianceArrowUp = document.querySelector(
      ".filter__appliances--angleUp .fa-angle-up"
    );
    const ustensilCloseElt = document.querySelector(".filter__ustensils--view");
    const ustensilArrowUp = document.querySelector(
      ".filter__ustensils--angleUp .fa-angle-up"
    );

    if (applianceCloseElt) applianceArrowUp.click();
    if (ustensilCloseElt) ustensilArrowUp.click();
  });
}

function handleArrowClickForAppliance() {
  const arrowDownAppliance = document.querySelector(
    ".filter__appliances--angleDown"
  );

  arrowDownAppliance.addEventListener("click", (e) => {
    e.preventDefault();
    const ustensilCloseElt = document.querySelector(".filter__ustensils--view");
    const ustensilArrowUp = document.querySelector(
      ".filter__ustensils--angleUp .fa-angle-up"
    );
    const ingredientCloseElt = document.querySelector(
      ".filter__ingredients--view"
    );
    const ingredientArrowUp = document.querySelector(
      ".filter__ingredients--angleUp .fa-angle-up"
    );

    if (ustensilCloseElt) ustensilArrowUp.click();
    if (ingredientCloseElt) ingredientArrowUp.click();
  });
}

function handleArrowClickForUstensil() {
  const arrowDownUstensil = document.querySelector(
    ".filter__ustensils--angleDown"
  );

  arrowDownUstensil.addEventListener("click", (e) => {
    e.preventDefault();
    const ingredientCloseElt = document.querySelector(
      ".filter__ingredients--view"
    );
    const ingredientArrowUp = document.querySelector(
      ".filter__ingredients--angleUp .fa-angle-up"
    );
    const applianceCloseElt = document.querySelector(
      ".filter__appliances--view"
    );
    const applianceArrowUp = document.querySelector(
      ".filter__appliances--angleUp .fa-angle-up"
    );

    if (ingredientCloseElt) ingredientArrowUp.click();
    if (applianceCloseElt) applianceArrowUp.click();
  });
}
