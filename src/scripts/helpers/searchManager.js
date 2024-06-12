// SEARCH DROPDOWN

export class DropdownSearch {
  constructor(dropdownIngredients) {
    this.dropdownIngredients = dropdownIngredients;
  }

  // Méthode pour effectuer la recherche des ingrédients
  searchIngredients(searchValue) {
    const dropdownValues = this.dropdownIngredients.split(",");
    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });
    return dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }
}
