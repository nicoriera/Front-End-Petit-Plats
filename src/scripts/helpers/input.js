const inputIds = [
  "search-appliances",
  "search-ingredients",
  "search-ustensils",
];

function setupClearButton(inputId) {
  const input = document.getElementById(inputId);
  const clearButton = document.getElementById(`clear-${inputId}`);

  if (input && clearButton) {
    input.addEventListener("input", () => {
      clearButton.classList.toggle("hidden", !input.value);
    });

    clearButton.addEventListener("click", () => {
      input.value = "";
      clearButton.classList.add("hidden");
    });
  }
}

inputIds.forEach(setupClearButton);
