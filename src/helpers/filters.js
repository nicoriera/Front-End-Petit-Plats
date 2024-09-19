// Fonction générique pour gérer la recherche des filtres
function handleFilterSearch(inputId, itemClass, listClass) {
  const searchQuery = sanitizeInput(
    document.getElementById(inputId).value.trim().toLowerCase()
  );

  if (!isValidSearchInput(searchQuery)) {
    return;
  }

  const cards = document.querySelectorAll(`.${itemClass}`);

  cards.forEach((card) => {
    const cardText = card.innerText.toLowerCase();
    if (cardText.includes(searchQuery)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  return document.querySelectorAll(`.${listClass} li`);
}

// Fonction générique pour ajouter l'événement de recherche sur l'input
function handleInputEvent(inputId, searchFunction) {
  const searchInput = document.getElementById(inputId);

  searchInput.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(searchFunction, typeInterval);
  });
}
