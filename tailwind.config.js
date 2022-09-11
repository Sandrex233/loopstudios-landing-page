/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: 'hsl(0, 0 %, 55 %)',
        veryDarkGray: 'hsl(0, 0 %, 41 %)',
      }
    },
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      jsans: ["Josefin Sans", "sans-serif"]
    },
  },
  plugins: [],
}
