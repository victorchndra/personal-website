/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'londrina-solid': ['Londrina Solid'],
        'quick-sand': ['Quicksand'],
        'bowlby-one-sc' : ['Bowlby One SC']
      },
      colors: {
        'primary': '#303030'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'false'
}

