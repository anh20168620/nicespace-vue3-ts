/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ADAD',
        btn_bg: '#00C3C3',
        grey:{
          1:'#F6F9FC',
          4:'#DADDE0',
          5:'#6B7075'
        }
      }
    },
  },
  plugins: [],
}
