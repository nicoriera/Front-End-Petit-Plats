class DropdownAppliance {
  constructor(data) {
    this._appliance = data.appliance;
  }

  createDropdownElement() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");

    const dropdownFilter = `${this._appliance}`;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel($wrapper.textContent);
    });

    return $wrapper;
  }
}
