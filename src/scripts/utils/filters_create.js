/*** fonction pour créer / voir les filtres. ***/

/*** function filterAppliances créer et fait apparaitre le filtre Ingrédient. ***/

/** filterIngredients is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterIngredients() {
  const ingredientsBox = document.getElementsByClassName("filter__ingredients");
  const template = document.createElement("div");
  template.className = "filter__ingredients--template";

  const article = document.createElement("div");
  article.className = "filter__ingredients--close";
  article.classList.add(
    "bg-white",
    "rounded-lg",
    "p-4",
    "w-44",
    "flex",
    "flex-col"
  );

  const headerIngredients = document.createElement("header");
  headerIngredients.className = "filter__ingredients--header";
  headerIngredients.classList.add("flex", "flex-row", "items-center", "gap-8");

  const title = document.createElement("h2");
  title.textContent = "Ingredients";
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
  inputIngredients.classList.add("my-4", "border", "border-gray-300", "p-1");

  const ingredientsListBox = document.createElement("ul");
  ingredientsListBox.className = "filter__ingredients--list";
  ingredientsListBox.style.display = "none";

  /** Unified Event Listener for Angle Click **/
  spanAngle.addEventListener("click", () => {
    if (article.classList.contains("filter__ingredients--close")) {
      // Open the dropdown
      article.classList.remove("filter__ingredients--close");
      article.classList.add("filter__ingredients--view");
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
      inputIngredients.style.display = "flex";
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
      /* défini dans filters_input */
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
      template.style.width = "170px";
      template.style.height = "auto";
      ingredientsListBox.style.display = "none";
    }
  });

  /* Append Section */
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  article.appendChild(inputIngredients);
  article.appendChild(ingredientsListBox);

  return article;
}

/*** function filterAppliances créer et fait apparaitre le filtre appareil. ***/
/** filterAppliances() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterAppliances() {
  const appliancesBox = document.getElementsByClassName("filter__appliances");
  const template = document.createElement("div");
  template.className = "filter__appliances--template";

  const article = document.createElement("div");
  article.className = "filter__appliances--close";
  article.classList.add(
    "bg-white",
    "rounded-lg",
    "p-4",
    "w-44",
    "flex",
    "flex-col"
  );

  const headerAppliances = document.createElement("header");
  headerAppliances.className = "filter__appliances--header";
  headerAppliances.classList.add("flex", "flex-row", "items-center", "gap-12");

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
  inputAppliances.classList.add("my-4", "border", "border-gray-300", "p-1");

  const appliancesListBox = document.createElement("ul");
  appliancesListBox.className = "filter__appliances--list";
  appliancesListBox.style.display = "none";

  /** Unified Event Listener for Angle Click **/
  spanAngle.addEventListener("click", () => {
    if (article.classList.contains("filter__appliances--close")) {
      // Open the dropdown
      article.classList.remove("filter__appliances--close");
      article.classList.add("filter__appliances--view");
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
      inputAppliances.style.display = "flex";
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
      template.style.width = "170px";
      template.style.height = "auto";
      appliancesListBox.style.display = "none";
    }
  });

  /* Append Section */
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  article.appendChild(inputAppliances);
  article.appendChild(appliancesListBox);

  return article;
}

/*** function filterUstensils créer et fait apparaitre le filtre ustensil. ***/
/** filterUstensils() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterUstensils() {
  const ustensilsBox = document.getElementsByClassName("filter__ustensils");
  const template = document.createElement("div");
  template.className = "filter__ustensils--template";

  const article = document.createElement("div");
  article.className = "filter__ustensils--close";
  article.classList.add(
    "bg-white",
    "rounded-lg",
    "p-4",
    "w-44",
    "flex",
    "flex-col"
  );

  const headerUstensils = document.createElement("header");
  headerUstensils.className = "filter__ustensils--header";
  headerUstensils.classList.add("flex", "flex-row", "items-center", "gap-12");

  const title = document.createElement("h2");
  title.textContent = "Ustensils";
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
  inputUstensils.classList.add("my-4", "border", "border-gray-300", "p-1");

  const ustensilsListBox = document.createElement("ul");
  ustensilsListBox.className = "filter__ustensils--list";
  ustensilsListBox.style.display = "none";

  /** Unified Event Listener for Angle Click **/
  spanAngle.addEventListener("click", () => {
    if (article.classList.contains("filter__ustensils--close")) {
      // Open the dropdown
      article.classList.remove("filter__ustensils--close");
      article.classList.add("filter__ustensils--view");
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
      inputUstensils.style.display = "flex";
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
      /* Défini dans Filters_input */
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
      template.style.width = "170px";
      template.style.height = "auto";
      ustensilsListBox.style.display = "none";
    }
  });

  /* Append Section */
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  article.appendChild(inputUstensils);
  article.appendChild(ustensilsListBox);

  return article;
}
