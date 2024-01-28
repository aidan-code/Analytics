/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors:{
      back: "#EBECF2",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#121212",
    },
    
    fontFamily:{
      "sans" : ["Plus Jakarta Sans", "sans-serif"]
    }
  },
  plugins: [],
}

