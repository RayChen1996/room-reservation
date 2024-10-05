/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blackTransparent: "#00000029",
        grayDark: "#748290",
        blueLight: "#569DC3",
        blueDark: "#2D3643",
        grayLight: "#E3E6E9",
        redLight: "#EA5B5B",
      },
    },
  },
  plugins: [require("daisyui")],
};
