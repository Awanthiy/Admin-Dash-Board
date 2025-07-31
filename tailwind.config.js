/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        brandPurple: {
          DEFAULT: '#575bc0',        
          light: '#7a7ed9',          
          dark: '#3f42a0',          
        },
      },
    },
  },
};
