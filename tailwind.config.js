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
          dark: colors.violet[950], 
         
        },
        secondary: {
          light: colors.orange[50], 
          dark: colors.orange[500], 
          500: colors.amber[500], 
        },
        ternary:{
          light: colors.zinc[100], 
          medium: colors.zinc[300], 
          dark: colors.orange[600], 
         
        }
    },
  },
  plugins: [],
}

}