class DropdownFiltersFactory {
  constructor(data, type) {
    if (type === "ingredients") {
      return new DropdownIngredients(data);
    } else if (type === "ustensils") {
      return new DropdownUstensils(data);
    } else if (type === "appliance") {
      return new DropdownAppliances(data);
    } else {
      throw new Error("Invalid dropdown filter data");
    }
  }
}
