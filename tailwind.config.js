/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/Users/nicolas/DEV/Front-End-Petits-Plats/**/*.html",
    // Ajoutez ici les chemins vers les autres fichiers utilisant des classes Tailwind
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/pictures/lampos-aritonang-24gR_9lCdes-unsplash 1.png')",
      },
      // Ajoutez ici d'autres personnalisations de votre thème Tailwind
    },
  },
};
