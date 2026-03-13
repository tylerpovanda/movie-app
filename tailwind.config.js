/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "D#6CC6F",
          200: "#B3E0FF",
          300: "#80BFFF",
          400: "#4DA6FF",
          500: "#1A8CFF",
        },
        dark: {
          100: "#1A1A1A",
          200: "#333393",
        },
        accent: "#AB88FF",
        background: "#0F0D23",
      },
    },
  },
  plugins: [],
};
