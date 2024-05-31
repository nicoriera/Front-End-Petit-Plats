class DropdownFilterIngredients {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  onSearchIngredients() {
    const $inputSearch = document.getElementById("search-ingredients");

    if (!$inputSearch) {
      console.error("L'élément avec l'ID 'search-ingredients' n'existe pas.");
      return;
    }

    let debounceTimeout;
    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        this.updateDropdownIngredients(searchValue);
      }, 300); // Attend 300ms après la dernière frappe de l'utilisateur avant de mettre à jour la liste déroulante
    });
  }

  loadAllIngredients() {
    this.updateDropdownIngredients();
  }

  updateDropdownIngredients(searchValue = "") {
    const dropdownValues = this._dropdown.split(",");
    console.log(dropdownValues, "dropdownValues");

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const $dropdownIngredientsButtons = (this.$dropdownFiltersIngredients =
      document.getElementById("dropdown-ingredients-buttons"));

    $dropdownIngredientsButtons.innerHTML = "";

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
        $dropdownIngredientsButtons.appendChild($wrapper);
      });
    }, 300);
  }

  createDropdownFilterIngredients() {
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
      "dropdown-label-search-ingredient-value"
    );
    $label.textContent = value;
  }
}
