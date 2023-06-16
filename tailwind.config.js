/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'usel01': "url('/public/images/usel01.jpg')",
        'usel02': "url('/public/images/usel02.jpg')",
        'usel03': "url('/public/images/usel03.jpg')",
        'usel04': "url('/public/images/usel04.jpg')",
      }
    },
  },
  plugins: [],
}

