/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue','sans-serif'],
      },
      colors: {
        'primary': '#14b8a6',
        'secondary': '#82b6b082',
      },
    },
  },
  plugins: [],
}

