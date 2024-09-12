function createFilterTemplate(filterName, filterClassName, inputId) {
  const template = createTemplateContainer(filterClassName);
  const article = createArticleContainer(filterClassName);
  const header = createHeader(filterName, filterClassName);

  const { input, clearButton, listBox } = createFilterElements(
    inputId,
    filterClassName
  );
  const { spanAngle, arrowDown, arrowUp } = createArrowIcons(filterClassName);

  addEventListeners(
    spanAngle,
    article,
    arrowDown,
    arrowUp,
    input,
    clearButton,
    listBox,
    template,
    filterClassName
  );
  clearButton.addEventListener("click", () =>
    resetInput(input, clearButton, listBox)
  );

  appendElementsToTemplate(
    header,
    spanAngle,
    article,
    input,
    clearButton,
    listBox,
    template
  );

  return template;
}

// Crée le conteneur principal du template
function createTemplateContainer(filterClassName) {
  return createDiv(`${filterClassName}--template relative`);
}

// Crée le conteneur article
function createArticleContainer(filterClassName) {
  return createDiv(
    `${filterClassName}--close bg-white rounded-lg w-44 flex flex-col`
  );
}

// Ajoute les éléments au template
function appendElementsToTemplate(
  header,
  spanAngle,
  article,
  input,
  clearButton,
  listBox,
  template
) {
  header.appendChild(spanAngle);
  article.append(header, input, clearButton, listBox);
  template.appendChild(article);
}

// Ajoute les écouteurs d'événements pour la gestion du toggle et du bouton clear
function addEventListeners(
  spanAngle,
  article,
  arrowDown,
  arrowUp,
  input,
  clearButton,
  listBox,
  template,
  filterClassName
) {
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
