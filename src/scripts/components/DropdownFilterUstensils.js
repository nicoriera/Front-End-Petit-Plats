class DropdownFilterUstensils {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  createDropdownFilterUstensils() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("dropdown-filter-wrapper");

    const dropdownFilter = `
    
          <button>
          ${this._dropdown.ustensil}
          </button>
      
      </div>
        `;

    $wrapper.innerHTML = dropdownFilter;
    return $wrapper;
  }
}
