function getSearchIngredients() {
  return handleFilterSearch(
    "ingredients-input",
    "filter__ingredients--items",
    "filter__ingredients--list"
  );
}

function inputIngredient() {
  handleInputEvent("ingredients-input", getSearchIngredients);
}

function getSearchAppliances() {
  return handleFilterSearch(
    "appliances-input",
    "filter__appliances--items",
    "filter__appliances--list"
  );
}

function inputAppliance() {
  handleInputEvent("appliances-input", getSearchAppliances);
}

function getSearchUstensils() {
  return handleFilterSearch(
    "ustensils-input",
    "filter__ustensils--items",
    "filter__ustensils--list"
  );
}

function inputUstensil() {
  handleInputEvent("ustensils-input", getSearchUstensils);
}
