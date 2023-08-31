/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/*.jsx",
    "./src/pages/*.jsx"
  ],
  theme: {
    fontFamily:{
      ubuntu:['Ubuntu']
    },
    screens:{
      // 'sm':'30px'
      'ms':"450px",
      // "mm":"370px",
      "ml":"400px",
      'mt':"768px",
      "lp":"1020px",

    },
    extend: {},
  },
  plugins: [],
}

