/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      neutral: {
        100: "#EAF1FB",
        300: "#E0E6F1",
        500: "#94A2B9",
        700: "#4D5D76",
        900: "#041B3F"
      },
      blue: {
        100: "#C5D9F8",
        500: "#44669C",
        900: "#143569"
      },
      teal: {
        100: "#90D0DA",
        500: "#398D99",
        900: "#02444D"
      },
      rose: {
        100: "#FB9DEC",
        500: "#E051C9",
        900: "#B01097"
      }
    },
    extend: {
      fontFamily: {
        serif: ['"Noto Serif"', "serif"],
        sans: ['"Noto Sans"', "sans-serif"]
      }
    }
  },
  plugins: []
};
