function getSearchUstensils() {
  const searchQuery = document
    .getElementById("ustensils-input")
    .value.toLowerCase();
  const cards = document.querySelectorAll(".filter__ustensils--items");

  cards.forEach((card) => {
    const cardText = card.innerText.toLowerCase();
    if (cardText.includes(searchQuery)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  return document.querySelectorAll(".filter__ustensils--list li");
}

function inputUstensil() {
  const searchInputUstensil = document.getElementById("ustensils-input");

  searchInputUstensil.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchUstensils, typeInterval);
  });
}
