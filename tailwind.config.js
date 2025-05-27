/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // 👈 custom font
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
