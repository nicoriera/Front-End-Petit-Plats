/*** Rechercher dans les inputs des filtres ***/

/** Fonction pour rechercher dans le filtre appareis via input **/

function getSearchAppliances() {
  const filterRender = document.querySelectorAll(
    ".filter__appliances--list li"
  );
  const cards = document.querySelectorAll(".filter__appliances--items");
  const searchQuery = document.getElementById("appliances-input").value;

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
function inputAppliance() {
  const searchInputAppliance = document.getElementById("appliances-input");
  searchInputAppliance.addEventListener("keyup", () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchAppliances, typeInterval);
  });
}
