/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        agustina: ['"Agustina Regular"', "sans-serif"],
      },
      animation: {
        wave: "wave 1s infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      transformOrigin: {
        custom: "70% 70%",
      },
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
        background: '#F5F8FA',
        darkBackground: '#15202B',
        darkPrimary: '#1DA1F2',
        darkSecondary: '#14171A',
        darkAccent: '#AAB8C2',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
