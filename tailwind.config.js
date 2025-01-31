/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Add .jsx here
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto","sans-serif"],
        poppins:["Poppins","sans-serif"],
      }

    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.vertical-heading': {
          '@media (min-width: 768px)': {
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          },
        },
      });
    },
  ],
}

