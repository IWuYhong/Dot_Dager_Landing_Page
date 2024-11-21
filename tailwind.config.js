/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('../public/images/pattern.webp')", // Ajusta la ruta
      },
      colors: {
        'my-custom-color': '#f00',
      },
      spacing: {
        'custom-spacing': '10rem',
      },
    },
  },
  plugins: [
    // Add any custom plugins here
  ],
}