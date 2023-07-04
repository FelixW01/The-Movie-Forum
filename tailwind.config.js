/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.handlebars'],
  theme: {
    extend: {
      fontFamily: {
        carter: ["Carter One", "cursive";]
      }
    },
  },
  plugins: [require("daisyui")],
};

