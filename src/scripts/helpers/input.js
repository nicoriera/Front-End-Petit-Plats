const searchInput = document.getElementById("search");
const clearButton = document.getElementById("clear");

searchInput.addEventListener("input", () => {
  if (searchInput.value) {
    // Affiche la croix lorsque l'input n'est pas vide
    clearButton.classList.remove("hidden");
  } else {
    // Cache la croix lorsque l'input est vide
    clearButton.classList.add("hidden");
  }
});
