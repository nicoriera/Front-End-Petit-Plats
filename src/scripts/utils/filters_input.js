/*** Rechercher dans les inputs des filtres ***/

/** Fonction pour rechercher dans le filtre ingrédient via input **/
function getSearchIngredients() {

  const filterRender = document.querySelectorAll('.filter__ingredients--list li');
  const cards = document.querySelectorAll('.filter__ingredients--items');
  const searchQuery = document.getElementById('ingredients-input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  return (filterRender);
}

/* Used on filters_recipes.js */ 
// eslint-disable-next-line no-unused-vars
function inputIngredient() {
  const searchInputIngredient = document.getElementById('ingredients-input');
  searchInputIngredient.addEventListener('keyup', () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}

/** Fonction pour rechercher dans le filtre appareis via input **/

function getSearchAppliances() {
  const filterRender = document.querySelectorAll('.filter__appliances--list li');
  const cards = document.querySelectorAll('.filter__appliances--items');
  const searchQuery = document.getElementById('appliances-input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  return (filterRender);
}

/* Used on filters_recipes.js */ 
// eslint-disable-next-line no-unused-vars
function inputAppliance() {
  const searchInputAppliance = document.getElementById('appliances-input');
  searchInputAppliance.addEventListener('keyup', () => {
        // clearTimeout is defined on search_bar.js 
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
  // eslint-disable-next-line no-undef
  typingTimer = setTimeout(getSearchAppliances, typeInterval);
  });
}

/** Fonction pour rechercher dans le filtre ustensil via input **/

function getSearchUstensils() {
  const filterRender = document.querySelectorAll('.filter__ustensils--list li');
  const cards = document.querySelectorAll('.filter__ustensils--items');
  const searchQuery = document.getElementById('ustensils-input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  return (filterRender);
}

/* Used on filters_recipes.js */ 
// eslint-disable-next-line no-unused-vars
function inputUstensil() {
  const searchInputUstensil = document.getElementById('ustensils-input');
  searchInputUstensil.addEventListener('keyup', () => {
        // clearTimeout is defined on search_bar.js 
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchUstensils, typeInterval);
  });
}

