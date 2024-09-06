function getSearchIngredients() {
  const filterRender = document.querySelectorAll(
    ".filter__ingredients--list li"
  );

  const cards = document.querySelectorAll(".filter__ingredients--items");

  const searchQuery = document.getElementById("ingredients-input").value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
  return filterRender;
}

/* Used on filters_recipes.js */
// eslint-disable-next-line no-unused-vars
function inputIngredient() {
  const searchInputIngredient = document.getElementById("ingredients-input");

  searchInputIngredient.addEventListener("keyup", () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}
