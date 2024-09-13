function getSearchIngredients() {
  const searchQuery = sanitizeInput(
    document.getElementById("ingredients-input").value.trim().toLowerCase()
  );

  if (!isValidSearchInput(searchQuery)) {
    return;
  }
  const cards = document.querySelectorAll(".filter__ingredients--items");

  cards.forEach((card) => {
    const cardText = card.innerText.toLowerCase();
    if (cardText.includes(searchQuery)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  return document.querySelectorAll(".filter__ingredients--list li");
}

function inputIngredient() {
  const searchInputIngredient = document.getElementById("ingredients-input");

  searchInputIngredient.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}
