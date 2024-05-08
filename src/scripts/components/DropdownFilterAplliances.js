class DropdownFilterAplliances {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  createDropdownFilterAplliances() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("dropdown-filter-wrapper");

    const dropdownFilter = `
  
        <button>
        ${this._dropdown.appliance}
        </button>
    
    </div>
      `;

    $wrapper.innerHTML = dropdownFilter;
    return $wrapper;
  }
}
