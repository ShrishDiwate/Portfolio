// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F'
      },
      fontFamily:{
        Outfit:["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow:{
        'black':'4px 4px 0 #000 ',
        'white':'4px 4px 0 #fff ',
      },
      gridTemplateColums:{
        'auto': 'repeat(auto-fit , minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}
