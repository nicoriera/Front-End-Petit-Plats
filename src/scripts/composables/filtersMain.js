function filterFactory(filterName, filterClassName, inputId, containerClass) {
  const container = document.getElementsByClassName(containerClass)[0];
  const template = createFilterTemplate(filterName, filterClassName, inputId);

  if (!template) {
    console.error("Le template n'a pas pu être créé pour", filterName);
    return;
  }

  container.appendChild(template);
}

function filterIngredients() {
  filterFactory(
    "Ingrédients",
    "filter__ingredients",
    "ingredients-input",
    "filter__ingredients"
  );
}

function filterAppliances() {
  filterFactory(
    "Appareils",
    "filter__appliances",
    "appliances-input",
    "filter__appliances"
  );
}

function filterUstensils() {
  filterFactory(
    "Ustensiles",
    "filter__ustensils",
    "ustensils-input",
    "filter__ustensils"
  );
}
