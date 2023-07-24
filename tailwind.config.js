/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './views/*.handlebars',
    './views/partials/*.handlebars',
    './views/layouts/*.handlebars'
  ],
  theme: {
    fontFamily: {
      acme: ['Acme'],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

