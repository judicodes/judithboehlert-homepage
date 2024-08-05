/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      beige: {
        100: "#FCF8EF",
        300: "#F0EDE6",
        500: "#D5D1CA",
        900: "#6C6657"
      },
      bluegrey: {
        100: "#DEE8FB",
        200: "#9FB0D1",
        300: "#6B7D9F",
        500: "#233861",
        700: "#03112D",
        900: "#010B20"
      },
      pink: {
        100: "#FFD5F8",
        300: "#FAA6ED",
        500: "#DC4BC5",
        700: "#A5078C",
        900: "#7E046A"
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        serif: ['"Noto Serif"', "serif"],
        sans: ['"Noto Sans"', "sans-serif"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, #d5d1ca 1px, transparent 1px), linear-gradient(to bottom, #d5d1ca 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, #233861 1px, transparent 1px), linear-gradient(to bottom, #233861 1px, transparent 1px)"
      },
      backgroundSize: {
        "custom-size": "100px 100px"
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require("tailwindcss-animate")]
};
