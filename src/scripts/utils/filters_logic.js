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
  filterClassName,
}) {
  if (!arrowDown || !arrowUp) {
    console.error("Les flèches n'ont pas été trouvées");
    return;
  }
  article.classList.replace(
    `${filterClassName}--close`,
    `${filterClassName}--view`
  );

  arrowDown.style.display = "none";

  arrowUp.style.display = "inline";
  input.style.display = "flex";
  clearButton.style.display = input.value ? "block" : "none";

  if (`${filterClassName}--view`) {
    article.style.width = "176px";
    article.style.maxHeight = "315px";
  }

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
  if (`${filterClassName}--close`) {
    article.style.width = "170px";
    article.style.height = "auto";
  }

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
