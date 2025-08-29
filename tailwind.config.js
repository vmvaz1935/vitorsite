/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A5B8D', // deep blue for hero sections
        secondary: '#3A877B', // green accent
        accent: '#F4FBFE', // soft background blue
      },
    },
  },
  plugins: [],
};