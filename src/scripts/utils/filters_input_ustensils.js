/** Fonction pour rechercher dans le filtre ustensil via input **/

function getSearchUstensils() {
  const filterRender = document.querySelectorAll(".filter__ustensils--list li");
  const cards = document.querySelectorAll(".filter__ustensils--items");
  const searchQuery = document.getElementById("ustensils-input").value;

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
function inputUstensil() {
  const searchInputUstensil = document.getElementById("ustensils-input");
  searchInputUstensil.addEventListener("keyup", () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchUstensils, typeInterval);
  });
}
