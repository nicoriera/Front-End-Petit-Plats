class DropdownFilterAplliances {
  constructor(dropdown) {
    this._dropdown = dropdown;
  }

  quickSort(array, key) {
    if (array.length <= 1) return array;

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
      if (i === Math.floor(array.length / 2)) continue;

      let pivotValue;
      let currentValue;

      if (key === "ingredients") {
        pivotValue = pivot[key]
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(" ");
        currentValue = array[i][key]
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(" ");
      } else {
        pivotValue = pivot[key].toLowerCase();
        currentValue = array[i][key].toLowerCase();
      }

      if (currentValue < pivotValue) left.push(array[i]);
      else right.push(array[i]);
    }

    return this.quickSort(left, key).concat(pivot, this.quickSort(right, key));
  }

  onSearchAplliances() {
    const $inputSearch = document.getElementById("search-appliances");

    if (!$inputSearch) {
      console.error("L'élément avec l'ID 'search-appliances' n'existe pas.");
      return;
    }

    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();
      this.updateDropdownAppliances(searchValue);
    });
  }

  updateDropdownAppliances(searchValue = "") {
    const dropdownValues = Object.values(this._dropdown);

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
    });

    const dropdownSorted = this.quickSort(dropdownFiltered, "appliance");

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

  // onSearchAplliances() {
  //   const $inputSearch = document.getElementById("search-appliances");
  //   $inputSearch.addEventListener("input", (e) => {
  //     e.preventDefault();
  //     const searchValue = e.target.value.toLowerCase();

  //     const dropdownValues = Object.values(this._dropdown);

  //     const dropdownFiltered = dropdownValues.filter((value) => {
  //       return value.toLowerCase().includes(searchValue);
  //     });

  //     // Vous pouvez supprimer cette ligne si le tri n'est pas nécessaire
  //     const dropdownSorted = dropdownFiltered;

  //     this.$dropdownFiltersAplliances = document.getElementById(
  //       "dropdown-appliances-buttons"
  //     );

  //     this.$dropdownFiltersAplliances.innerHTML = "";
  //     dropdownSorted.forEach((dropdownValue) => {
  //       const dropdownFilterComponent = new DropdownFilterAplliances(
  //         dropdownValue
  //       );
  //       this.$dropdownFiltersAplliances.appendChild(
  //         dropdownFilterComponent.createDropdownFilterAplliances()
  //       );
  //     });
  //   });
  // }

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
