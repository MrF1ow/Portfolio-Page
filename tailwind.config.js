/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to bottom, #000814 , #003566)'
      },
      colors: {
        darkblue: '#000814',
        navyblue: '#001d3d',
        regblue: '#003566',
        regyellow: '#ffc300',
        brightyellow: '#ffd60a'
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      league: ['League Spartan', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

