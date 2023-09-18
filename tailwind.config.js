/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages//*.{html,js,ts,tsx}", "./components//*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
      fontFamily:{
        'brandFont':['Playfair Display', 'serif'],
        'reading':['Quicksand' ,'sans-serif'],
      }
  },
  plugins: [],
}

