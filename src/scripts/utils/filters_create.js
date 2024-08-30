function createFilterTemplate(filterName, filterClassName, inputId) {
  const template = document.createElement("div");
  template.className = `${filterClassName}--template relative`;

  const article = document.createElement("div");
  article.className = `${filterClassName}--close`;
  article.classList.add("bg-white", "rounded-lg", "w-44", "flex", "flex-col");

  const header = document.createElement("header");
  header.className = `${filterClassName}--header`;
  header.classList.add("flex", "flex-row", "items-center", "gap-12", "p-4");

  const title = document.createElement("h2");
  title.textContent = filterName;
  title.className = `${filterClassName}--name`;

  const spanAngle = document.createElement("span");
  spanAngle.className = `${filterClassName}--angleDown`;

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  spanAngle.appendChild(arrowDown);
  spanAngle.appendChild(arrowUp);

  header.appendChild(title);
  header.appendChild(spanAngle);
  article.appendChild(header);
  template.appendChild(article);

  const input = document.createElement("input");
  input.setAttribute("id", inputId);
  input.style.display = "none";
  input.className = `${filterClassName}--input`;
  input.classList.add(
    "mt-2",
    "mb-4",
    "mx-4",
    "border",
    "border-gray-300",
    "p-1",
    "focus:outline-none"
  );

  const clearButton = document.createElement("button");
  clearButton.setAttribute("type", "button");
  clearButton.className = `${filterClassName}--clear-button absolute top-[72px] right-6 text-gray-500 hover:text-gray-700 focus:outline-none`;
  clearButton.style.display = "none"; // Caché par défaut
  clearButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>`;

  const listBox = document.createElement("ul");
  listBox.className = `${filterClassName}--list`;
  listBox.style.display = "none";

  spanAngle.addEventListener("click", (e) => {
    e.preventDefault();
    toggleFilter(
      article,
      arrowDown,
      arrowUp,
      input,
      clearButton,
      listBox,
      template,
      filterClassName
    );
  });

  clearButton.addEventListener("click", () => {
    input.value = "";
    clearButton.style.display = "none";
    resetList(listBox);
    input.focus();
  });

  template.appendChild(article);
  article.appendChild(header);
  article.appendChild(input);
  article.appendChild(clearButton);
  article.appendChild(listBox);

  return template;
}

function toggleFilter(
  article,
  arrowDown,
  arrowUp,
  input,
  clearButton,
  listBox,
  template,
  filterClassName
) {
  if (article.classList.contains(`${filterClassName}--close`)) {
    article.classList.remove(`${filterClassName}--close`);
    article.classList.add(`${filterClassName}--view`);
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline";
    input.style.display = "flex";
    clearButton.style.display = input.value ? "block" : "none";
    template.style.width = "176px";
    template.style.height = "315px";
    listBox.style.display = "flex";
    listBox.style.width = "100%";
    listBox.style.maxHeight = "210px";
    listBox.classList.add(
      "flex",
      "flex-col",
      "text-ellipsis",
      "overflow-y-auto"
    );
    input.focus();
  } else {
    article.classList.remove(`${filterClassName}--view`);
    article.classList.add(`${filterClassName}--close`);
    arrowDown.style.display = "inline";
    arrowUp.style.display = "none";
    input.style.display = "none";
    clearButton.style.display = "none";
    template.style.width = "170px";
    template.style.height = "auto";
    listBox.style.display = "none";
  }
}

function resetList(listBox) {
  const listItems = listBox.querySelectorAll("li");
  listItems.forEach((item) => {
    item.style.display = "block";
  });
}

function filterIngredients() {
  const ingredientsBox = document.getElementsByClassName(
    "filter__ingredients"
  )[0];
  const filterTemplate = createFilterTemplate(
    "Ingrédients",
    "filter__ingredients",
    "ingredients-input"
  );
  ingredientsBox.appendChild(filterTemplate);
}

function filterAppliances() {
  const appliancesBox =
    document.getElementsByClassName("filter__appliances")[0];
  const filterTemplate = createFilterTemplate(
    "Appareils",
    "filter__appliances",
    "appliances-input"
  );
  appliancesBox.appendChild(filterTemplate);
}

function filterUstensils() {
  const ustensilsBox = document.getElementsByClassName("filter__ustensils")[0];
  const filterTemplate = createFilterTemplate(
    "Ustensiles",
    "filter__ustensils",
    "ustensils-input"
  );
  ustensilsBox.appendChild(filterTemplate);
}
