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
        100: "#CDE9F3",
        500: "#3586A5",
        900: "#054963"
      },
      rose: {
        100: "#FFF1FD",
        500: "#DDA9D5",
        900: "#B066A5"
      }
    },
    extend: {}
  },
  plugins: []
};
