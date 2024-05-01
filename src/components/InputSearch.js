export function InputSearch() {
  return `
      <div class="w-2/3 h-auto relative">
        <input
          class="relative w-full h-14 px-6 py-4 mt-4 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 font-['Manrope'] font-normal"
          type="search"
          name="search recipes"
          id="search-recipes"
          placeholder="Rechercher une recette, un ingrédient, ..."
        />
        <img
          class="absolute top-6 right-2 bg-black hover:bg-amber-300 p-2 w-10 h-10 rounded-lg cursor-pointer"
          src="./src/assets/icon/icon-loop.svg"
          alt="icon icon-loop"
        />
      </div>
    `;
}
