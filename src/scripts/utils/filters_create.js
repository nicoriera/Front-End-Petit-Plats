function createFilterTemplate(filterName, filterClassName, inputId) {
  const template = createDiv(`${filterClassName}--template relative`);
  const article = createDiv(
    `${filterClassName}--close bg-white rounded-lg w-44 flex flex-col`
  );
  const header = createHeader(filterName, filterClassName);

  const { input, clearButton, listBox } = createFilterElements(
    inputId,
    filterClassName
  );
  const { spanAngle, arrowDown, arrowUp } = createArrowIcons(filterClassName);

  spanAngle.addEventListener("click", (e) =>
    handleToggleClick(e, {
      article,
      arrowDown,
      arrowUp,
      input,
      clearButton,
      listBox,
      template,
      filterClassName,
    })
  );
  clearButton.addEventListener("click", () =>
    resetInput(input, clearButton, listBox)
  );

  header.appendChild(spanAngle);
  article.append(header, input, clearButton, listBox);
  template.appendChild(article);

  return template;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function createHeader(filterName, filterClassName) {
  const header = createDiv(
    `${filterClassName}--header flex flex-row items-center gap-12 p-4`
  );
  const title = document.createElement("h2");
  title.textContent = filterName;
  title.className = `${filterClassName}--name`;
  header.appendChild(title);
  return header;
}

function createArrowIcons(filterClassName) {
  const spanAngle = createDiv(`${filterClassName}--angleDown`);
  const arrowDown = createIcon("fa-angle-down");
  const arrowUp = createIcon("fa-angle-up", true);
  spanAngle.append(arrowDown, arrowUp);
  return { spanAngle, arrowDown, arrowUp };
}

function createIcon(iconClass, hidden = false) {
  const icon = document.createElement("i");
  icon.className = `fa-solid ${iconClass} fa-lg`;
  icon.style.cursor = "pointer";
  icon.style.display = hidden ? "none" : "inline";
  return icon;
}

function createFilterElements(inputId, filterClassName) {
  const input = document.createElement("input");
  input.id = inputId;
  input.className = `${filterClassName}--input mt-2 mb-4 mx-4 border border-gray-300 p-1 focus:outline-none`;
  input.style.display = "none";

  const clearButton = createClearButton(filterClassName);
  const listBox = createListBox(filterClassName);

  return { input, clearButton, listBox };
}

function createClearButton(filterClassName) {
  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = `${filterClassName}--clear-button absolute top-[72px] right-6 text-gray-500 hover:text-gray-700 focus:outline-none`;
  clearButton.style.display = "none";
  clearButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>`;
  return clearButton;
}

function createListBox(filterClassName) {
  const listBox = document.createElement("ul");
  listBox.className = `${filterClassName}--list`;
  listBox.style.display = "none";
  return listBox;
}

function handleToggleClick(
  e,
  {
    article,
    arrowDown,
    arrowUp,
    input,
    clearButton,
    listBox,
    template,
    filterClassName,
  }
) {
  e.preventDefault();
  toggleFilterState({
    article,
    arrowDown,
    arrowUp,
    input,
    clearButton,
    listBox,
    template,
    filterClassName,
  });
}

function toggleFilterState({
  article,
  arrowDown,
  arrowUp,
  input,
  clearButton,
  listBox,
  template,
  filterClassName,
}) {
  const isClosed = article.classList.contains(`${filterClassName}--close`);
  if (isClosed) {
    openFilter({
      article,
      arrowDown,
      arrowUp,
      input,
      clearButton,
      listBox,
      template,
      filterClassName,
    });
  } else {
    closeFilter({
      article,
      arrowDown,
      arrowUp,
      input,
      clearButton,
      listBox,
      template,
      filterClassName,
    });
  }
}

function openFilter({
  article,
  arrowDown,
  arrowUp,
  input,
  clearButton,
  listBox,
  template,
  filterClassName,
}) {
  article.classList.replace(
    `${filterClassName}--close`,
    `${filterClassName}--view`
  );
  arrowDown.style.display = "none";
  arrowUp.style.display = "inline";
  input.style.display = "flex";
  clearButton.style.display = input.value ? "block" : "none";
  template.style.width = "176px";
  template.style.height = "315px";
  listBox.style.display = "flex";
  listBox.classList.add("flex", "flex-col", "text-ellipsis", "overflow-y-auto");
  input.focus();
}

function closeFilter({
  article,
  arrowDown,
  arrowUp,
  input,
  clearButton,
  listBox,
  template,
  filterClassName,
}) {
  article.classList.replace(
    `${filterClassName}--view`,
    `${filterClassName}--close`
  );
  arrowDown.style.display = "inline";
  arrowUp.style.display = "none";
  input.style.display = "none";
  clearButton.style.display = "none";
  template.style.width = "170px";
  template.style.height = "auto";
  listBox.style.display = "none";
}

function resetInput(input, clearButton, listBox) {
  input.value = "";
  clearButton.style.display = "none";
  resetList(listBox);
  input.focus();
}

function resetList(listBox) {
  const listItems = listBox.querySelectorAll("li");
  listItems.forEach((item) => {
    item.style.display = "block";
  });
}

function filterFactory(filterName, filterClassName, inputId, containerClass) {
  const container = document.getElementsByClassName(containerClass)[0];
  const filterTemplate = createFilterTemplate(
    filterName,
    filterClassName,
    inputId
  );
  container.appendChild(filterTemplate);
}

function filterIngredients() {
  filterFactory(
    "Ingrédients",
    "filter__ingredients",
    "ingredients-input",
    "filter__ingredients"
  );
}

function filterAppliances() {
  filterFactory(
    "Appareils",
    "filter__appliances",
    "appliances-input",
    "filter__appliances"
  );
}

function filterUstensils() {
  filterFactory(
    "Ustensiles",
    "filter__ustensils",
    "ustensils-input",
    "filter__ustensils"
  );
}
