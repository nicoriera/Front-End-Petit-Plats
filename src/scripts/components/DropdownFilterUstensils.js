class DropdownFilterUstensils {
  constructor(dropdown) {
    if (!dropdown || !dropdown.ustensil) {
      throw new Error(
        "Le paramètre 'dropdown' est obligatoire pour instancier un objet DropdownFilterUstensils."
      );
    }
    this._dropdown = dropdown.ustensil;
    this.$dropdownButtons = document.getElementById(
      "dropdown-ustensils-buttons"
    );
    this.setupEventListeners();
    this.loadAllUstensils();
  }

  loadAllUstensils() {
    this.updateDropdownUstensils();
  }

  onSearchUstensils() {
    const $inputSearch = document.getElementById("search-ustensils");

    if (!$inputSearch) {
      console.error("L'élément avec l'ID 'search-ustensils' n'existe pas.");
      return;
    }

    let debounceTimeout;
    $inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        this.updateDropdownUstensils(searchValue);
      }, 300);
    });
  }

  setupEventListeners() {
    document.addEventListener("recipesFiltered", (e) => {
      const ustensils = this.extractUstensils(e.detail.recipes);
      this.updateDropdownUstensils(ustensils);
    });
  }

  extractUstensils(recipes) {
    const ustensilSet = new Set();
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ust) => {
        ustensilSet.add(ust);
      });
    });
    return [...ustensilSet];
  }

  updateDropdownUstensils(ustensils = []) {
    this.$dropdownButtons.innerHTML = ""; // Clear existing buttons

    // Ensure ustensils is an array or split string if not
    const ustensilsList = Array.isArray(ustensils)
      ? ustensils
      : ustensils.split(",");

    ustensilsList
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .forEach((ustensil) => {
        const $wrapper = this.createDropdownFilterItem(ustensil);
        this.$dropdownButtons.appendChild($wrapper);
      });
  }

  // updateDropdownUstensils(searchValue = "") {
  //   const dropdownValues = this._dropdown
  //     .split(",")
  //     .map((value) => value.trim());

  //   const dropdownFiltered = dropdownValues.filter((value) => {
  //     return value.toLowerCase().includes(searchValue);
  //   });

  //   const dropdownSorted = dropdownFiltered.sort((a, b) => {
  //     return a.toLowerCase().localeCompare(b.toLowerCase());
  //   });

  //   const $dropdownUstensilsButtons = (this.$dropdownFiltersUstensils =
  //     document.getElementById("dropdown-ustensils-buttons"));

  //   $dropdownUstensilsButtons.innerHTML = "";

  //   dropdownSorted.forEach((value) => {
  //     const $wrapper = document.createElement("button");
  //     $wrapper.classList.add(
  //       "w-full",
  //       "text-left",
  //       "hover:bg-amber-300",
  //       "p-2"
  //     );

  //     const dropdownFilter = `
  //         ${value}
  //     `;

  //     $wrapper.innerHTML = dropdownFilter;

  //     setTimeout(() => {
  //       $dropdownUstensilsButtons.appendChild($wrapper);
  //     }, 300);

  //     $wrapper.addEventListener("click", () => {
  //       this.updateLabel($wrapper.textContent);
  //     });

  //     $dropdownUstensilsButtons.appendChild($wrapper);
  //   });
  // }

  createDropdownFilterItem(ustensil) {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");

    const dropdownFilter = `
    
          ${ustensil}
      
        `;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel($wrapper.textContent);
    });

    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(
      "dropdown-label-search-ustensil-value"
    );
    $label.textContent = value;
  }
}
