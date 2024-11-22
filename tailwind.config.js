/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('../public/images/pattern.webp')", // Ajusta la ruta
        'logo': "url('../public/logo.webp')", // Ajusta la ruta
      }
    },
  },
  plugins: [
    
    require('@tailwindcss/typography'),
    // ...
  ],
}