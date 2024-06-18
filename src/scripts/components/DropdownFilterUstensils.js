class DropdownFilterUstensils {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  onSearchUstensils() {
    const $inputSearch = document.getElementById("search-ustensils");

    if (!$inputSearch) {
      console.error("L'élément avec l'ID 'search-ustensils' n'existe pas.");
      return;
    }

    let debounceTimeout;
    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        this.updateDropdownUstensils(searchValue);
      }, 300);
    });
  }

  loadAllUstensils() {
    this.updateDropdownUstensils();
  }

  updateDropdownUstensils(searchValue = "") {
    const dropdownValues = this._dropdown.split(",");

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const $dropdownUstensilsButtons = (this.$dropdownFiltersUstensils =
      document.getElementById("dropdown-ustensils-buttons"));

    $dropdownUstensilsButtons.innerHTML = "";

    dropdownSorted.forEach((value) => {
      const $wrapper = document.createElement("button");
      $wrapper.classList.add(
        "w-full",
        "text-left",
        "hover:bg-amber-300",
        "p-2"
      );

      const dropdownFilter = `
          ${value}
      `;

      $wrapper.innerHTML = dropdownFilter;

      setTimeout(() => {
        $dropdownUstensilsButtons.appendChild($wrapper);
      }, 300);
    });
  }

  createDropdownFilterUstensils() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");

    const dropdownFilter = `
    
          ${this._dropdown}
      
        `;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel($wrapper.textContent);
    });

    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(
      "dropdown-label-search-ustensil-value"
    );
    $label.textContent = value;
  }
}
