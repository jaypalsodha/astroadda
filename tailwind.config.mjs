/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        amber: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' },
        cosmic: { 900: '#0b0c10', 800: '#1f2833', 700: '#2d3748', accent: '#66fcf1' }
      }
    },
  },
  plugins: [],
}