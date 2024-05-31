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
<<<<<<< HEAD
      }, 300);
=======
      }, 300); // Attend 300ms après la dernière frappe de l'utilisateur avant de mettre à jour la liste déroulante
>>>>>>> 16e223b (added search for appliances dropdown)
    });
  }

  loadAllIngredients() {
    this.updateDropdownIngredients();
  }

  updateDropdownIngredients(searchValue = "") {
<<<<<<< HEAD
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
=======
    const dropdownValues = Object.values(this._dropdown);

    const dropdownFiltered = dropdownValues.filter((value) => {
      return value.toLowerCase().includes(searchValue);
>>>>>>> 16e223b (added search for appliances dropdown)
    });

    const dropdownSorted = dropdownFiltered.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

<<<<<<< HEAD
    const $dropdownIngredientsButtons = document.getElementById(
      "dropdown-ingredients-buttons"
    );
=======
    const $dropdownIngredientsButtons = (this.$dropdownFiltersIngredients =
      document.getElementById("dropdown-ingredients-buttons"));

>>>>>>> 16e223b (added search for appliances dropdown)
    $dropdownIngredientsButtons.innerHTML = "";

    dropdownSorted.forEach((value) => {
      const $wrapper = document.createElement("button");
      $wrapper.classList.add(
        "w-full",
        "text-left",
<<<<<<< HEAD
        "hover:bg-amber-300",
        "p-2"
      );

      const dropdownFilter = `${value}`;
=======
        "hover:bg-yellow-300",
        "p-2"
      );

      const dropdownFilter = `
          ${value}
      `;
>>>>>>> 16e223b (added search for appliances dropdown)

      $wrapper.innerHTML = dropdownFilter;

      setTimeout(() => {
        $dropdownIngredientsButtons.appendChild($wrapper);
<<<<<<< HEAD
      }, 300);
    });
=======
      });
    }, 1000);
>>>>>>> 16e223b (added search for appliances dropdown)
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
