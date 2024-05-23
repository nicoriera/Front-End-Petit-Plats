class RecipeCard {
  constructor(recipe) {
    this.recipe = recipe;
  }

  createRecipeCard() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("recipe-card-wrapper");

    const recipeCard = `
    
    <div
      class="w-full h-[740px]  bg-white rounded-[21px] shadow relative"
    >
      <img
        class="w-full h-[253px] rounded-t-[21px] object-cover "
        src="${this.recipe.image}"
      />
      <div class="p-6">
        <div
          class=" text-black text-lg font-normal font-['Anton'] mt-4"
        >
          ${this.recipe.name}
        </div>
        <div
          class=" flex-col justify-start items-start gap-8 inline-flex"
        >
          <div class="flex-col justify-start items-start gap-2.5 flex">
            <div class="  ">
              <div
                class=" text-neutral-500 mt-6 text-xs font-bold font-['Manrope'] uppercase tracking-wide"
              >
                RECETTE
              </div>
              <div
                class="h-[80px] mt-4 mb-5  text-zinc-900 text-sm font-normal font-['Manrope'] overflow-hidden text-ellipsis "
              >
                ${this.recipe.description}
              </div>
            </div>
          </div>
      </div>
        <div
          class="flex-col justify-start items-start gap-2.5 "
        >
          <div class="mt-4 ">
            <div
              class=" text-neutral-500 text-xs font-bold font-['Manrope'] uppercase tracking-wide"
            >
              Ingrédients
            </div>
            <div class="grid grid-cols-2 gap-4">
            ${this.recipe.ingredients
              .map((ingredient) => {
                return `
                  <div class=" mt-2">
                    <div class="text-zinc-900 text-sm font-medium font-['Manrope']">
                      ${ingredient.ingredient}
                    </div>
                    <div class="text-neutral-500 text-sm font-normal font-['Manrope']">
                      ${ingredient.quantity ? ingredient.quantity : ""} ${
                  ingredient.unit ? ingredient.unit : ""
                }
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
          
          </div>

        </div>
      </div>
      <div
        class="px-[15px] py-[5px] right-4 top-4   bg-amber-300 rounded-[14px] justify-center items-center gap-2.5 inline-flex absolute"
      >
        <span
          class="text-center text-zinc-900 text-xs font-normal font-['Manrope']"
        >
         ${this.recipe.time}min
        </span>
      </div>
    </div>
  
        `;

    $wrapper.innerHTML = recipeCard;
    return $wrapper;
  }
}
