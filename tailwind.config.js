/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      back: "#EBECF2",
      white: "#FFFFFF",
      black: "#000000",
    },
    darkMode: "class",
    fontFamily:{
      "sans" : ["Plus Jakarta Sans", "sans-serif"]
    }
  },
  plugins: [],
}

