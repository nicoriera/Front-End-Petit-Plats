const inputIds = [
  "search-appliances",
  "search-ingredients",
  "search-ustensils",
];

inputIds.forEach((inputId) => {
  const input = document.getElementById(inputId);
  const clearButton = document.getElementById(`clear-${inputId}`);

  input.addEventListener("input", () => {
    if (input.value) {
      clearButton.classList.remove("hidden");
    } else {
      clearButton.classList.add("hidden");
    }
  });
});
