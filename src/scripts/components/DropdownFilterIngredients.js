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
      }, 300);
    });
  }

  loadAllIngredients() {
    this.updateDropdownIngredients();
  }

  updateDropdownIngredients(searchValue = "") {
    console.log(searchValue, "searchValue");
    const searchWords = searchValue.toLowerCase().trim().split(/\s+/); // Diviser la chaîne de recherche en mots

    const dropdownValues = this._dropdown.ingredient
      .split(",")
      .map((value) => value.trim());

    const dropdownFiltered = dropdownValues.filter((ingredient) => {
      const ingredientWords = ingredient.toLowerCase().split(/\s+/); // Diviser chaque ingrédient en mots
      return searchWords.every((searchWord) =>
        ingredientWords.some((ingredientWord) =>
          ingredientWord.includes(searchWord)
        )
      );
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const $dropdownIngredientsButtons = document.getElementById(
      "dropdown-ingredients-buttons"
    );
    $dropdownIngredientsButtons.innerHTML = "";

    dropdownSorted.forEach((value) => {
      const $wrapper = document.createElement("button");
      $wrapper.classList.add(
        "w-full",
        "text-left",
        "hover:bg-amber-300",
        "p-2"
      );

      const dropdownFilter = `${value}`;

      $wrapper.innerHTML = dropdownFilter;

      setTimeout(() => {
        $dropdownIngredientsButtons.appendChild($wrapper);
      }, 300);
    });
  }

  createDropdownFilterIngredients() {
    const $wrapper = document.createElement("button");
    $wrapper.classList.add("w-full", "text-left", "hover:bg-amber-300", "p-2");

    const dropdownFilter = `

   
      ${this._dropdown.ingredient}
   
  
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
