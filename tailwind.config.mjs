/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { orange: '#FF6A00', blue: '#007BFF' },
        ink: { 950: '#0A0E14', 900: '#0d1320', 800: '#131b2e', 700: '#1b2740' },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
