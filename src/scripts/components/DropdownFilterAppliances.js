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
    const dropdownValuesString = this._dropdown;
    const dropdownValues = dropdownValuesString
      .split(",")
      .map((value) => value.trim());

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const $dropdownAppliancesButtons = document.getElementById(
      "dropdown-appliances-buttons"
    );

    $dropdownAppliancesButtons.innerHTML = "";

    dropdownSorted.forEach((value) => {
      const $wrapper = document.createElement("button");
      $wrapper.classList.add(
        "w-full",
        "text-left",
        "hover:bg-yellow-300",
        "p-2"
      );

      const dropdownFilter = `
          ${value}
      `;

      $wrapper.innerHTML = dropdownFilter;

      setTimeout(() => {
        $dropdownAppliancesButtons.appendChild($wrapper);
      }, 300);

      $wrapper.addEventListener("click", () => {
        this.updateLabel(value);
      });

      $dropdownAppliancesButtons.appendChild($wrapper);
    });
  }

  createDropdownFilterItem() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-yellow-300", "p-2");

    const dropdownFilter = `
          ${this._dropdown}
    
      `;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel(this._dropdown);
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
