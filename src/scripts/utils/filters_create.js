/*** fonction pour créer / voir les filtres. ***/

/*** function filterAppliances créer et fait apparaitre le filtre Ingrédient. ***/

/** filterIngredients is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterIngredients() {
  const ingredientsBox = document.getElementsByClassName("filter__ingredients");
  const template = document.createElement("div");
  template.className = "filter__ingredients--template relative";

  const article = document.createElement("div");
  article.className = "filter__ingredients--close";
  article.classList.add("bg-white", "rounded-lg", "w-44", "flex", "flex-col");

  const headerIngredients = document.createElement("header");
  headerIngredients.className = "filter__ingredients--header";
  headerIngredients.classList.add(
    "flex",
    "flex-row",
    "items-center",
    "gap-12",
    "p-4"
  );

  const title = document.createElement("h2");
  title.textContent = "Ingrédients";
  title.className = "filter__ingredients--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__ingredients--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  spanAngle.appendChild(arrowDown);
  spanAngle.appendChild(arrowUp);

  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  article.appendChild(headerIngredients);
  template.appendChild(article);

  const inputIngredients = document.createElement("input");
  inputIngredients.setAttribute("id", "ingredients-input");
  inputIngredients.style.display = "none";
  inputIngredients.className = "filter__ingredients--input";
  inputIngredients.classList.add(
    "mt-2",
    "mb-4",
    "mx-4",
    "border",
    "border-gray-300",
    "p-1",
    "focus:outline-none"
  );

  // Bouton de suppression pour l'input
  const clearIngredientsButton = document.createElement("button");
  clearIngredientsButton.setAttribute("type", "button");
  clearIngredientsButton.className =
    "filter__ingredients--clear-button absolute top-[72px] right-6 text-gray-500 hover:text-gray-700 focus:outline-none";
  clearIngredientsButton.style.display = "none"; // Caché par défaut
  clearIngredientsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>`;

  const ingredientsListBox = document.createElement("ul");
  ingredientsListBox.className = "filter__ingredients--list";
  ingredientsListBox.style.display = "none";

  // Fonction pour réinitialiser la liste des ingrédients
  function resetIngredientsList() {
    const listItems = ingredientsListBox.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.display = "block"; // Rendre tous les éléments visibles
    });
  }

  /** Unified Event Listener for Angle Click **/
  spanAngle.addEventListener("click", (e) => {
    e.preventDefault();
    if (article.classList.contains("filter__ingredients--close")) {
      // Open the dropdown
      article.classList.remove("filter__ingredients--close");
      article.classList.add("filter__ingredients--view");
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
      inputIngredients.style.display = "flex";
      clearIngredientsButton.style.display = inputIngredients.value
        ? "block"
        : "none";
      template.style.width = "176px";
      template.style.height = "315px";
      ingredientsListBox.style.display = "flex";
      ingredientsListBox.style.width = "100%";
      ingredientsListBox.style.maxHeight = "210px";
      ingredientsListBox.classList.add(
        "flex",
        "flex-col",
        "text-ellipsis",
        "overflow-y-auto"
      );
      inputIngredients.focus();
      /* Défini dans filters_input */
      // eslint-disable-next-line no-undef
      inputIngredient();
      /* Défini dans tags.js */
      // eslint-disable-next-line no-undef
      addTagFilterIngredients();
    } else {
      // Close the dropdown
      article.classList.remove("filter__ingredients--view");
      article.classList.add("filter__ingredients--close");
      arrowDown.style.display = "inline";
      arrowUp.style.display = "none";
      inputIngredients.style.display = "none";
      clearIngredientsButton.style.display = "none";
      template.style.width = "170px";
      template.style.height = "auto";
      ingredientsListBox.style.display = "none";
    }
  });

  // Afficher/Masquer le bouton de suppression en fonction du texte dans l'input
  inputIngredients.addEventListener("input", () => {
    clearIngredientsButton.style.display = inputIngredients.value
      ? "block"
      : "none";
  });

  // Gestion du clic sur le bouton de suppression
  clearIngredientsButton.addEventListener("click", () => {
    inputIngredients.value = "";
    clearIngredientsButton.style.display = "none";
    resetIngredientsList(); // Réinitialiser la liste lorsque le texte est effacé

    inputIngredients.focus(); // Remet le focus sur l'input
    // Optionnel: Réinitialiser le filtre si nécessaire
    // filterIngredients();
  });

  /* Append Section */
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  article.appendChild(inputIngredients);
  article.appendChild(clearIngredientsButton); // Ajouter le bouton de suppression ici
  article.appendChild(ingredientsListBox);

  return article;
}

/*** function filterAppliances créer et fait apparaitre le filtre appareil. ***/
/** filterAppliances() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterAppliances() {
  const appliancesBox = document.getElementsByClassName("filter__appliances");
  const template = document.createElement("div");
  template.className = "filter__appliances--template relative";

  const article = document.createElement("div");
  article.className = "filter__appliances--close";
  article.classList.add("bg-white", "rounded-lg", "w-44", "flex", "flex-col");

  const headerAppliances = document.createElement("header");
  headerAppliances.className = "filter__appliances--header";
  headerAppliances.classList.add(
    "flex",
    "flex-row",
    "items-center",
    "gap-12",
    "p-4"
  );

  const title = document.createElement("h2");
  title.textContent = "Appareils";
  title.className = "filter__appliances--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__appliances--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  spanAngle.appendChild(arrowDown);
  spanAngle.appendChild(arrowUp);

  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  article.appendChild(headerAppliances);
  template.appendChild(article);

  const inputAppliances = document.createElement("input");
  inputAppliances.setAttribute("id", "appliances-input");
  inputAppliances.style.display = "none";
  inputAppliances.className = "filter__appliances--input";
  inputAppliances.classList.add(
    "mt-2",
    "mb-4",
    "mx-4",
    "border",
    "border-gray-300",
    "p-1",
    "focus:outline-none"
  );

  // Bouton de suppression pour l'input
  const clearAppliancesButton = document.createElement("button");
  clearAppliancesButton.setAttribute("type", "button");
  clearAppliancesButton.className =
    "filter__appliances--clear-button absolute top-[72px] right-6 text-gray-500 hover:text-gray-700 focus:outline-none";
  clearAppliancesButton.style.display = "none"; // Caché par défaut
  clearAppliancesButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>`;

  const appliancesListBox = document.createElement("ul");
  appliancesListBox.className = "filter__appliances--list";
  appliancesListBox.style.display = "none";

  // Fonction pour réinitialiser la liste des appareils
  function resetAppliancesList() {
    const listItems = appliancesListBox.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.display = "block"; // Rendre tous les éléments visibles
    });
  }

  /** Unified Event Listener for Angle Click **/
  spanAngle.addEventListener("click", (e) => {
    e.preventDefault();
    if (article.classList.contains("filter__appliances--close")) {
      // Open the dropdown
      article.classList.remove("filter__appliances--close");
      article.classList.add("filter__appliances--view");
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
      inputAppliances.style.display = "flex";
      clearAppliancesButton.style.display = inputAppliances.value
        ? "block"
        : "none";
      template.style.width = "176px";
      template.style.height = "315px";
      appliancesListBox.style.display = "flex";
      appliancesListBox.style.width = "100%";
      appliancesListBox.style.maxHeight = "210px";
      appliancesListBox.classList.add(
        "flex",
        "flex-col",
        "text-ellipsis",
        "overflow-y-auto"
      );
      inputAppliances.focus();
      /* Défini dans filters_input */
      // eslint-disable-next-line no-undef
      inputAppliance();
      /* Défini dans tags.js */
      // eslint-disable-next-line no-undef
      addTagFilterAppliances();
    } else {
      // Close the dropdown
      article.classList.remove("filter__appliances--view");
      article.classList.add("filter__appliances--close");
      arrowDown.style.display = "inline";
      arrowUp.style.display = "none";
      inputAppliances.style.display = "none";
      clearAppliancesButton.style.display = "none";
      template.style.width = "170px";
      template.style.height = "auto";
      appliancesListBox.style.display = "none";
    }
  });

  // Afficher/Masquer le bouton de suppression en fonction du texte dans l'input
  inputAppliances.addEventListener("input", () => {
    clearAppliancesButton.style.display = inputAppliances.value
      ? "block"
      : "none";
  });

  // Gestion du clic sur le bouton de suppression
  clearAppliancesButton.addEventListener("click", () => {
    inputAppliances.value = "";
    clearAppliancesButton.style.display = "none";
    resetAppliancesList(); // Réinitialiser la liste lorsque le texte est effacé

    inputAppliances.focus(); // Remet le focus sur l'input
    // Optionnel: Réinitialiser le filtre si nécessaire
    // filterAppliances();
  });

  /* Append Section */
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  article.appendChild(inputAppliances);
  article.appendChild(clearAppliancesButton); // Ajouter le bouton de suppression ici
  article.appendChild(appliancesListBox);

  return article;
}

/*** function filterUstensils créer et fait apparaitre le filtre ustensil. ***/
/** filterUstensils() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterUstensils() {
  const ustensilsBox = document.getElementsByClassName("filter__ustensils");
  const template = document.createElement("div");
  template.className = "filter__ustensils--template relative";

  const article = document.createElement("div");
  article.className = "filter__ustensils--close";
  article.classList.add("bg-white", "rounded-lg", "w-44", "flex", "flex-col");

  const headerUstensils = document.createElement("header");
  headerUstensils.className = "filter__ustensils--header";
  headerUstensils.classList.add(
    "flex",
    "flex-row",
    "items-center",
    "gap-12",
    "p-4"
  );

  const title = document.createElement("h2");
  title.textContent = "Ustensiles";
  title.className = "filter__ustensils--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__ustensils--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  spanAngle.appendChild(arrowDown);
  spanAngle.appendChild(arrowUp);

  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  article.appendChild(headerUstensils);
  template.appendChild(article);

  const inputUstensils = document.createElement("input");
  inputUstensils.setAttribute("id", "ustensils-input");
  inputUstensils.style.display = "none";
  inputUstensils.className = "filter__ustensils--input";
  inputUstensils.classList.add(
    "mt-2",
    "mb-4",
    "mx-4",
    "border",
    "border-gray-300",
    "p-1",
    "focus:outline-none"
  );

  // Bouton de suppression pour l'input
  const clearUstensilsButton = document.createElement("button");
  clearUstensilsButton.setAttribute("type", "button");
  clearUstensilsButton.className =
    "filter__ustensils--clear-button absolute top-[72px] right-6 text-gray-500 hover:text-gray-700 focus:outline-none";
  clearUstensilsButton.style.display = "none"; // Caché par défaut
  clearUstensilsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>`;

  const ustensilsListBox = document.createElement("ul");
  ustensilsListBox.className = "filter__ustensils--list";
  ustensilsListBox.style.display = "none";

  // Fonction pour réinitialiser la liste des ustensiles
  function resetUstensilsList() {
    const listItems = ustensilsListBox.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.display = "block"; // Rendre tous les éléments visibles
    });
  }

  /** Unified Event Listener for Angle Click **/
  spanAngle.addEventListener("click", (e) => {
    e.preventDefault();
    if (article.classList.contains("filter__ustensils--close")) {
      // Open the dropdown
      article.classList.remove("filter__ustensils--close");
      article.classList.add("filter__ustensils--view");
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
      inputUstensils.style.display = "flex";
      clearUstensilsButton.style.display = inputUstensils.value
        ? "block"
        : "none";
      template.style.width = "176px";
      template.style.height = "315px";
      ustensilsListBox.style.display = "flex";
      ustensilsListBox.style.width = "100%";
      ustensilsListBox.style.maxHeight = "210px";
      ustensilsListBox.classList.add(
        "flex",
        "flex-col",
        "text-ellipsis",
        "overflow-y-auto"
      );
      inputUstensils.focus();
      /* Défini dans filters_input */
      // eslint-disable-next-line no-undef
      inputUstensil();
      /* Défini dans tags.js */
      // eslint-disable-next-line no-undef
      addTagFilterUstensils();
    } else {
      // Close the dropdown
      article.classList.remove("filter__ustensils--view");
      article.classList.add("filter__ustensils--close");
      arrowDown.style.display = "inline";
      arrowUp.style.display = "none";
      inputUstensils.style.display = "none";
      clearUstensilsButton.style.display = "none";
      template.style.width = "170px";
      template.style.height = "auto";
      ustensilsListBox.style.display = "none";
    }
  });

  // Afficher/Masquer le bouton de suppression en fonction du texte dans l'input
  inputUstensils.addEventListener("input", () => {
    clearUstensilsButton.style.display = inputUstensils.value
      ? "block"
      : "none";
  });

  // Gestion du clic sur le bouton de suppression
  clearUstensilsButton.addEventListener("click", () => {
    inputUstensils.value = "";
    clearUstensilsButton.style.display = "none";
    resetUstensilsList(); // Réinitialiser la liste lorsque le texte est effacé

    inputUstensils.focus(); // Remet le focus sur l'input
    // Optionnel: Réinitialiser le filtre si nécessaire
    // filterUstensils();
  });

  /* Append Section */
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  article.appendChild(inputUstensils);
  article.appendChild(clearUstensilsButton); // Ajouter le bouton de suppression ici
  article.appendChild(ustensilsListBox);

  return article;
}
