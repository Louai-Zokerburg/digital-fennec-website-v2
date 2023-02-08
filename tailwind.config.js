/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {
      
      colors: {
        primary_color: '#CC0033',
        white_color: '#ECEDEF',
        light_green: '#58FFAB',
        border_color: '#787878'

      },
      animation: {

        powel: 'powel 1s linear infinite'

      },
      keyframes: {
        powel: {
          '0%, 50%, 100%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(8deg)'},
          '75%': {transform: 'rotate(-8deg)'}
        }
        
      }
    },
  },
  plugins: [],
}
