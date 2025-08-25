/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgba(46, 16, 101, 0.3)', 
          medium: '#CCCFFF', 

          dark: '#062269', 
         
        },
        secondary: {
          light: colors.orange[50], 
          dark: '#FFD257', 
          medium: colors.zinc[700], 
        },
        ternary:{
          light: colors.zinc[100], 
          medium: colors.zinc[300], 
          dark: '#F55045', 
         
        }
    },
  },
  plugins: [],
}

}