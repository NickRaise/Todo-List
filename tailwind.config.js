/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'custom-nav-color': '#0063b2ff',
        // 'custom-body-color': '#9cc3d5ff'

        'custom-nav-color': '#755139ff',
        'custom-body-color': '#f2edd7ff',
        'custom-ligh-shade': '#f5f5f5ff',
        'custom-btn-light': '#97694a',
      }
    },
  },
  plugins: [],
}

