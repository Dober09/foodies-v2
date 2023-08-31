/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/*.jsx", "./src/pages/*.jsx", "./src/imdex.html"],
  theme: {
    colors: {
      lightpink: "#FFEDDE",
      somepink: "#FFF5EC",
      darkpink: "#FE043C",
    },
    fontFamily: {
      ubuntu: ["Ubuntu"],
    },
    screens: {
      // 'sm':'30px'
      ms: "450px",
      // "mm":"370px",
      ml: "400px",
      mt: "768px",
      lp: "1020px",
    },
    extend: {},
  },
  plugins: [],
};

