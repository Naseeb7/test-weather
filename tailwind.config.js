/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%); opacity : 0' },
          '100%': { transform: 'translateY(0); opacity : 1' },
        },
        growOut: {
          '0%': { transform: 'scale(.5); opacity : 0' },
          '100%': { transform: 'scale(1); opacity : 1' },
        },
      },
      animation: {
        slidedown: 'slideDown .5s ease-in-out',
        growOut: 'growOut .5s ease-in-out',
      }
    },
  },
  plugins: [],
}

