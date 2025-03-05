/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'serif'],
        Dangrek:["Dangrek", 'sans-serif'],
        Varela:["Varela Round", 'sans-serif'],
        Playwrite:["Playwrite AU NSW"," cursive"]
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-optical-auto': {
          fontOpticalSizing: 'auto',
        },
        '.font-wdth-100': {
          fontVariationSettings: '"wdth" 100',
        },
        '.font-wdth-200': {
          fontVariationSettings: '"wdth" 200',
        },
        '.outfit-regular': {
          fontFamily: '"Outfit", serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontOpticalSizing: 'auto',
        },
        '.roboto-regular': {
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
