class DropdownFilterAplliances {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  onSearchAplliances() {
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

  updateDropdownAppliances(searchValue = "") {
    const dropdownValues = Object.values(this._dropdown);

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    this.$dropdownFiltersAplliances = document.getElementById(
      "dropdown-appliances-buttons"
    );

    this.$dropdownFiltersAplliances.innerHTML = "";
    dropdownSorted.forEach((dropdownValue) => {
      const dropdownFilterComponent = new DropdownFilterAplliances({
        appliance: dropdownValue,
      });
      this.$dropdownFiltersAplliances.appendChild(
        dropdownFilterComponent.createDropdownFilterAplliances()
      );
    });
  }

  createDropdownFilterAplliances() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-yellow-300", "p-2");

    const dropdownFilter = `
          ${this._dropdown.appliance}
    
      `;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel(this._dropdown.appliance);
    });
    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(
      "dropdown-label-search-appliance-value"
    );
    console.log($label);
    $label.textContent = value;
  }
}
