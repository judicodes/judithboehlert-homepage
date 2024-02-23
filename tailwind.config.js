/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      neutral: {
        100: "#DEE8FB",
        300: "#9FB0D1",
        500: "#6B7D9F",
        700: "#233861",
        900: "#03112D"
      },
      blue: {
        100: "#9CBDFF",
        500: "#3368D0",
        900: "#073CA4"
      },
      pink: {
        100: "#FAA6ED",
        500: "#DC4BC5",
        900: "#A5078C"
      }
    },
    extend: {
      fontFamily: {
        serif: ['"Noto Serif"', "serif"],
        sans: ['"Noto Sans"', "sans-serif"]
      }
    }
  },
  plugins: [require("daisyui")]
};
