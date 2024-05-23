/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html", "./src/**/*.css"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/pictures/lampos-aritonang-24gR_9lCdes-unsplash 1.png')",
      },
    },
  },
  plugins: [],
};
