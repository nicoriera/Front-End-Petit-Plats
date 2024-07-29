/*** Fonction pour remplir les filtres par catégorie ***/


/** fillfilters() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function fillFilters(recipes) {
  const ingredientsBloc = document.querySelector('.filter__ingredients--list');
  const appliancesBloc = document.querySelector('.filter__appliances--list');
  const ustensilsBloc = document.querySelector('.filter__ustensils--list');

  const ingredientsList = [];
  const appliancesList = [];
  const ustensilsList = [];

  // On vide les listes à chaque fois que l'on appel la fonction.
  ingredientsBloc.innerHTML = '';
  appliancesBloc.innerHTML = '';
  ustensilsBloc.innerHTML = '';

  
  recipes.forEach((recipe) => {
    /** Ingredients **/
    // if tags already used, don't push it.
    const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText);
    recipe.ingredients.forEach(({ ingredient }) => {
      if (ingredientsList.includes(ingredient) === false && itags.includes(ingredient) === false) {
        ingredientsList.push(ingredient);
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter__ingredients--items');
        filterItem.innerText = ingredient;
        ingredientsBloc.appendChild(filterItem);
      }
    });
    
    /** appliances **/
    // if tags already used, don't push it.
    const atags = [...document.querySelectorAll('.tag__appliance')].map( (atag) => atag.innerText);
      if (appliancesList.includes(recipe.appliance) === false && atags.includes(recipe.appliance) === false) {
        appliancesList.push(recipe.appliance);
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter__appliances--items');
        filterItem.innerText = recipe.appliance;
        appliancesBloc.appendChild(filterItem);
      }

    /** ustensils **/
    // if tags already used, don't push it.
    const utags = [...document.querySelectorAll('.tag__ustensil')].map( (utag) => utag.innerText)
    recipe.ustensils.forEach((ustensil) => {
      if (ustensilsList.includes(ustensil) === false && utags.includes(ustensil) === false) {
        ustensilsList.push(ustensil);
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter__ustensils--items');
        filterItem.innerText = ustensil;
        ustensilsBloc.appendChild(filterItem);
      } 
    });
  });
  /* Variable défini dans tags.js */
  // eslint-disable-next-line no-undef
  tagIngredientAlreadyAdded = false;
  // eslint-disable-next-line no-undef
  addTagFilterIngredients();
  // eslint-disable-next-line no-undef
  tagApplianceAlreadyAdded = false;
  // eslint-disable-next-line no-undef
  addTagFilterAppliances();
  // eslint-disable-next-line no-undef
  tagUstensilAlreadyAdded = false;
  // eslint-disable-next-line no-undef
  addTagFilterUstensils();
}

/*** Fonction pour ouvrir qu'un seul filtre à la fois. ***/
// eslint-disable-next-line no-unused-vars
function isArrowClicked() {
  /** Variables **/

  const arrowDownIngredient = document.querySelector('.filter__ingredients--angleDown');
  const arrowDownAppliance = document.querySelector('.filter__appliances--angleDown');
  const arrowDownUstensil = document.querySelector('.filter__ustensils--angleDown');

  let ingredientCloseElt;
  let ingredientArrowUp;
  let applianceCloseElt;
  let applianceArrowUp;
  let ustensilCloseElt;
  let ustensilArrowUp;

  /** Events **/
  
  /* Ingredient */
  arrowDownIngredient.addEventListener('click', () => {
    applianceCloseElt = document.querySelector('.filter__appliances--view');
    applianceArrowUp = document.querySelector('.filter__appliances--angleUp .fa-angle-up');
    ustensilCloseElt = document.querySelector('.filter__ustensils--view');
    ustensilArrowUp = document.querySelector('.filter__ustensils--angleUp .fa-angle-up');
    if (applianceCloseElt != null) {
      applianceArrowUp.click();
    }
    if (ustensilCloseElt != null) {
      ustensilArrowUp.click();
    }
  });

  /* Appliance */ 
  arrowDownAppliance.addEventListener('click', () => {
    ustensilCloseElt = document.querySelector('.filter__ustensils--view');
    ustensilArrowUp = document.querySelector('.filter__ustensils--angleUp .fa-angle-up');
    ingredientCloseElt = document.querySelector('.filter__ingredients--view');
    ingredientArrowUp = document.querySelector('.filter__ingredients--angleUp .fa-angle-up');
    if (ustensilCloseElt != null) {
      ustensilArrowUp.click();
    }
    if (ingredientCloseElt != null) {
      ingredientArrowUp.click();
    }
  });

  /* Ustensil */
  arrowDownUstensil.addEventListener('click', () => {
    ingredientCloseElt = document.querySelector('.filter__ingredients--view');
    ingredientArrowUp = document.querySelector('.filter__ingredients--angleUp .fa-angle-up');
    applianceCloseElt = document.querySelector('.filter__appliances--view');
    applianceArrowUp = document.querySelector('.filter__appliances--angleUp .fa-angle-up');
    if (ingredientCloseElt != null) {
      ingredientArrowUp.click();
      }
    if (applianceCloseElt != null) {
      applianceArrowUp.click();
    }  
  });
}