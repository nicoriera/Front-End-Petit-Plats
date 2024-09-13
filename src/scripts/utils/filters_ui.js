function createFilterTemplate(filterName, filterClassName, inputId) {
  // Crée la structure du template et ses éléments
  const {
    template,
    article,
    spanAngle,
    input,
    clearButton,
    listBox,
    arrowDown,
    arrowUp,
  } = createTemplateStructure(filterClassName, filterName, inputId);

  // Ajoute les événements de bascule et d'autres interactions
  addToggleEventListeners({
    spanAngle,
    article,
    input,
    clearButton,
    listBox,
    template,
    filterClassName,
    arrowDown,
    arrowUp,
  });

  if (!template) {
    console.error("Erreur dans la création du template pour", filterName);
    return null;
  }

  // Retourne le template
  return template;
}

// Crée et organise la structure du template
function createTemplateStructure(filterClassName, filterName, inputId) {
  const template = createTemplate(filterClassName);
  const article = createArticle(filterClassName);
  const header = createFilterHeader(filterName, filterClassName);
  const filterElements = getFilterElements(inputId, filterClassName);
  const arrowIcons = createArrows(filterClassName);

  // Vérifie que tous les éléments nécessaires sont présents
  if (
    !areElementsDefined([
      template,
      article,
      header,
      ...Object.values(filterElements),
      ...Object.values(arrowIcons),
    ])
  ) {
    console.error(
      "Un ou plusieurs éléments DOM sont undefined dans createTemplateStructure !"
    );
    return null;
  }

  appendElementsToTemplate(
    header,
    arrowIcons.spanAngle,
    article,
    filterElements.input,
    filterElements.clearButton,
    filterElements.listBox,
    template
  );

  return {
    template,
    article,
    spanAngle: arrowIcons.spanAngle,
    input: filterElements.input,
    clearButton: filterElements.clearButton,
    listBox: filterElements.listBox,
    arrowDown: arrowIcons.arrowDown,
    arrowUp: arrowIcons.arrowUp,
    filterClassName,
  };
}

// Sous-fonctions pour décomposer la logique
function createTemplate(filterClassName) {
  return createTemplateContainer(filterClassName);
}

function createArticle(filterClassName) {
  return createArticleContainer(filterClassName);
}

function createFilterHeader(filterName, filterClassName) {
  return createHeader(filterName, filterClassName);
}

function getFilterElements(inputId, filterClassName) {
  return createFilterElements(inputId, filterClassName);
}

function createArrows(filterClassName) {
  return createArrowIcons(filterClassName);
}

function areElementsDefined(elements) {
  return elements.every((element) => element !== null && element !== undefined);
}

// Ajoute les événements d'écoute pour les éléments du filtre
function addToggleEventListeners({
  spanAngle,
  article,
  input,
  clearButton,
  listBox,
  template,
  filterClassName,
  arrowDown,
  arrowUp,
}) {
  spanAngle.addEventListener("click", (e) =>
    handleToggleClick(e, {
      article,
      spanAngle,
      input,
      clearButton,
      listBox,
      template,
      filterClassName,
      arrowDown,
      arrowUp,
    })
  );

  clearButton.addEventListener("click", () =>
    resetInput(input, clearButton, listBox)
  ); // Événement pour réinitialiser le filtre
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
  if (header && spanAngle) {
    header.appendChild(spanAngle);
  }

  if (article && input && clearButton && listBox) {
    article.append(header, input, clearButton, listBox);
  }

  if (template && article) {
    template.appendChild(article);
  }
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
