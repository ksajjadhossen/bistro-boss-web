/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["dark", "light"], // Dark is the default theme
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
