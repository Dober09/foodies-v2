/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/*.js",
],
  theme: {
    extend: {
      colors:{
        primary:"rgba(7,86,78,0.781)",
        secondary:"rgba(80,207,207,0.493)",
        lightblack:"rgba(0,0,0,0.4)"
      },
      fontFamily:{
        ubuntu :['Ubuntu']
      }
    },
  },
  plugins: [],
}

