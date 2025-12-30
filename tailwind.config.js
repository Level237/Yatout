// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT : On surveille tous les fichiers dans app/ et src/
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [],
  theme: {
    extend: {
      colors: {
        primary: "#00CFE4",
        secondary: "#1A2B3C",
        background: "#F5F7FA",
        surface: "#FFFFFF",
        success: "#2ECC71",
        error: "#E74C3C",
      },
    },
  },
  plugins: [],
};