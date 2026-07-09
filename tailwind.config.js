/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111111',
          light: '#FAFAFA',
          accent: '#A68A61', // O tom dourado/champanhe da marca
          muted: '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Playball', 'cursive'], // Fonte para "Silhueta" e "sensibilidade"
      },
    },
  },
  plugins: [],
};