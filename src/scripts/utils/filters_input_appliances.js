function getSearchAppliances() {
  const searchQuery = document
    .getElementById("appliances-input")
    .value.toLowerCase();
  const cards = document.querySelectorAll(".filter__appliances--items");

  cards.forEach((card) => {
    const cardText = card.innerText.toLowerCase();
    if (cardText.includes(searchQuery)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  return document.querySelectorAll(".filter__appliances--list li");
}

function inputAppliance() {
  const searchInputAppliance = document.getElementById("appliances-input");

  searchInputAppliance.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchAppliances, typeInterval);
  });
}
