/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login-landing':"url('/assets/images/landing-page.jpg')"
      },
      fontFamily:{
        'primary':['Poppins']
      }
    },
  },
  plugins: [],
}