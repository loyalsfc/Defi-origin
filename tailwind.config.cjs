/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red': '#fd4040',
        'main-color': '#F5B958',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 4px 4px rgba(245, 245, 245, 0.2)',
        '4xl': '4px 0px 4px rgba(245, 245, 245, 0.2)'
      }
    },
  },
  plugins: [],
}
