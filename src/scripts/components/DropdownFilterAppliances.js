class DropdownFilterAppliances {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  onSearchAppliances() {
    const $inputSearch = document.getElementById("search-appliances");

    if (!$inputSearch) {
      console.error("L'élément avec l'ID 'search-appliances' n'existe pas.");
      return;
    }

    let debounceTimeout;
    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        this.updateDropdownAppliances(searchValue);
      }, 300);
    });
  }

  loadAllAppliances() {
    this.updateDropdownAppliances();
  }

  updateDropdownAppliances(searchValue = "") {
    const dropdownValues = Object.values(this._dropdown);

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const $dropdownAppliancesButtons = (this.$dropdownFiltersAppliances =
      document.getElementById("dropdown-appliances-buttons"));

    $dropdownAppliancesButtons.innerHTML = "";

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
        $dropdownAppliancesButtons.appendChild($wrapper);
      }, 1000);
    });
  }

  createDropdownFilterAppliances() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");

    const dropdownFilter = `
          ${this._dropdown.appliance}
    `;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel($wrapper.textContent);
    });

    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(
      "dropdown-label-search-appliance-value"
    );
    $label.textContent = value;
  }
}
