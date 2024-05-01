/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    // add paths to all other files that use Tailwind classes here
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/pictures/lampos-aritonang-24gR_9lCdes-unsplash 1.png')",
      },
    },
  },
};
