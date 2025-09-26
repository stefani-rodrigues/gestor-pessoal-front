/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // aqui você pode adicionar cores, fontes ou variáveis personalizadas
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
