/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'teal-shadow':' 7px 14px 18px 12px rgba(0, 150, 136, 0.4)',
      'white-shadow':'14 18px 12px rgba(255, 255, 255, 0.3)'
    },
  },
  plugins: [],
}