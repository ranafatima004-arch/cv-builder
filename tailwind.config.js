/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: '#118AB2',
        ink: '#3F436B',
        mint: '#7CD5C4',
        surface: '#F2F2EF',
        accent: { 50: '#E2F6F1', 500: '#118AB2', 600: '#3F436B' },
      },
    },
  },
  plugins: [],
};
