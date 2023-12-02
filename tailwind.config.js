/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#eeeeee",
        accent: "#00ADFF",
        secondary: "#393e46",
        dark: "#222831",
        black: "#000000",
        navbar: "#2A2A2A",
        secondary2: "#171616",
        button: "#1D41FD"
      },
    },
  },
  plugins: [],
});

