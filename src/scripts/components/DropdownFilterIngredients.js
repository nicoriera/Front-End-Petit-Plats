class DropdownFilterIngredients {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  createDropdownFilterIngredients() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("dropdown-filter-wrapper");

    const dropdownFilter = `

      <button>
      ${this._dropdown.ingredient}
      </button>
  
  </div>
    `;

    $wrapper.innerHTML = dropdownFilter;
    return $wrapper;
  }
}
