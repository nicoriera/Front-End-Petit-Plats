class DropdownFilter {
  constructor(dropdownId, labelId, searchInputId) {
    this.dropdownId = dropdownId;
    this.labelId = labelId;
    this.searchInputId = searchInputId;
    this.dropdownValues = [];
    this.debounceTimeout;
  }

  onSearch() {
    const $inputSearch = document.getElementById(this.searchInputId);
    if (!$inputSearch) {
      throw new Error(
        `L'élément avec l'ID '${this.searchInputId}' n'existe pas.`
      );
    }

    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.updateDropdown(searchValue);
      }, 300);
    });
  }

  loadAll() {
    this.updateDropdown();
  }

  updateDropdown(searchValue = "") {
    const dropdownValuesFiltered = this.dropdownValues
      .filter((value) => value.toLowerCase().includes(searchValue))
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const $dropdownButtons = document.getElementById(this.dropdownId);
    if (!$dropdownButtons) {
      throw new Error(`L'élément avec l'ID '${this.dropdownId}' n'existe pas.`);
    }

    $dropdownButtons.innerHTML = "";
    dropdownValuesFiltered.forEach((value) => {
      const $wrapper = document.createElement("button");
      $wrapper.classList.add(
        "w-full",
        "text-left",
        "hover:bg-amber-300",
        "p-2"
      );
      $wrapper.textContent = value;
      $wrapper.addEventListener("click", () => {
        this.updateLabel(value);
      });
      $dropdownButtons.appendChild($wrapper);
    });
  }

  createDropdownFilter() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");
    $wrapper.textContent = this.dropdownValues[0] || "";
    $wrapper.addEventListener("click", () => {
      this.updateLabel($wrapper.textContent);
    });
    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(this.labelId);
    if (!$label) {
      throw new Error(`L'élément avec l'ID '${this.labelId}' n'existe pas.`);
    }
    $label.textContent = value;
  }
}

export class DropdownFilterAppliances extends DropdownFilter {
  debugger;
  constructor(dropdown) {
    super(
      "dropdown-appliances-buttons",
      "dropdown-label-search-appliance-value",
      "search-appliances"
    );
    this.dropdownValues = Object.values(dropdown);
  }
}

export class DropdownFilterIngredients extends DropdownFilter {
  debugger;
  constructor(dropdown) {
    super(
      "dropdown-ingredients-buttons",
      "dropdown-label-search-ingredient-value",
      "search-ingredients"
    );
    this.dropdownValues = dropdown.split(",");
  }
}
