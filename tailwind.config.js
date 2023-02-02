/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E3350D",
        accent: "#EE6B2F",
        secondary: "#E6BC2F",
        muted: "#919191",
        base: "#F5F5F5"
      },
    },
  },
  plugins: [],
};
