import { InputSearch } from "./InputSearch.js";

function Header() {
  return `
    <header class="h-auto bg-hero-pattern bg-no-repeat bg-cover">
      <div class="px-10 py-8">
        <div class="flex-col justify-between items-center">
          <div>
            <img
              class="h-6"
              src="src/assets/logo/Logo.png"
              alt="Logo Les Petits Plats"
            />
          </div>
          <div class="py-48 w-full inline-flex flex-col justify-center items-center">
            <div class="w-full text-center text-amber-300 text-[44px] font-normal font-['Anton'] mb-4">
              CHERCHEZ PARMI PLUS DE 1500 RECETTES <br />
              DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
            </div>
            ${InputSearch()}
        
          </div>
        </div>
      </div>
    </header>
  `;
}

// Usage
document.body.innerHTML = Header();
