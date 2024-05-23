class DropdownFilterAplliances {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  createDropdownFilterAplliances() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-yellow-300", "p-2");

    const dropdownFilter = `
          ${this._dropdown.appliance}
    
      `;

    $wrapper.innerHTML = dropdownFilter;
    return $wrapper;
  }
}
