/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      colors: {
        thBlue: "#BBD4F1",
        thBlue2: "#8cb3a2",
        thYellow: "#C4B269",
        thYellow2: "#f8d95b",
        thBlack: "#181c1e",
        pink: "#F1BBD3",
      }
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

