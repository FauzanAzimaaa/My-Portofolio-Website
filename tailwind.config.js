/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        fadeIn : 'fadeIn 1s ease-in forwards',
        fadeInSlideIn: 'fadeInSlideIn 1s ease-out forwards',
        gradient: 'gradient 8s ease infinite',
      },
      keyframes : {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn:{
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInSlideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors:{
        customGrey : '#EBEBEB',
        customGrey2 : '#FAFAFA',
        secondaryColor : '#8B5CF6',
      }
    },
  },
  plugins: [],
}

