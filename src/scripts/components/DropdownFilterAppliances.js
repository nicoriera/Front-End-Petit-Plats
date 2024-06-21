class DropdownFilterAppliances {
  constructor(dropdown) {
    if (!dropdown || !dropdown.appliance) {
      throw new Error(
        "Le paramètre 'dropdown' est obligatoire pour instancier un objet DropdownFilterAppliances."
      );
    }
    this._dropdown = dropdown.appliance; // Assurez-vous que c'est correctement initialisé
    this.$dropdownButtons = document.getElementById(
      "dropdown-appliances-buttons"
    );
    this.setupEventListeners();
    this.loadAllAppliances();
  }

  loadAllAppliances() {
    this.updateDropdownAppliances(); // Chargement initial des boutons
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
        this.updateDropdownAppliances(searchValue); // Update on input after debounce
      }, 300);
    });
  }

  setupEventListeners() {
    document.addEventListener("recipesFiltered", (e) => {
      const appliances = this.extractAppliances(e.detail.recipes);
      this.updateDropdownAppliances(appliances); // Update from recipesFiltered event
    });
  }

  extractAppliances(recipes) {
    const applianceSet = new Set();
    recipes.forEach((recipe) => {
      if (recipe.appliance) {
        applianceSet.add(recipe.appliance);
      }
    });
    return [...applianceSet];
  }

  updateDropdownAppliances(appliances = []) {
    this.$dropdownButtons.innerHTML = ""; // Clear existing buttons

    // Ensure appliances is an array or split string if not
    const appliancesList = Array.isArray(appliances)
      ? appliances
      : appliances.split(",").map((appliance) => appliance.trim());

    appliancesList
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .forEach((appliance) => {
        const $wrapper = this.createDropdownFilterItem(appliance);
        this.$dropdownButtons.appendChild($wrapper);
      });
  }

  createDropdownFilterItem(appliance) {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");

    const dropdownFilter = `${appliance}`;

    $wrapper.innerHTML = dropdownFilter;

    $wrapper.addEventListener("click", () => {
      this.updateLabel($wrapper.textContent);
    });

    return $wrapper;
  }

  updateLabel(value) {
    const $label = document.getElementById(
      "dropdown-label-search-appliance-value"
    );
    $label.textContent = value; // Update label content
  }
}
