/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Critical for the Dark Mode bonus feature
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seaside-blue': '#1e3a8a',
        'clay-warm': '#b45309',
      }
    },
  },
  plugins: [],
}