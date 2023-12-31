const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./public/chat.html",
  ],
  theme: {
    extend: {
      "fontFamily": {
        'comfortaa': ['Comfortaa', 'sans-serif']
      },

      "colors": {
        "zaffre": {
          50: "#E5E0FA",
          100: "#CEC5F6",
          200: "#9E8CED",
          300: "#694EE4",
          400: "#4020D0",
          500: "#2F1797",
          600: "#251278",
          700: "#1B0D59",
          800: "#13093E",
          900: "#0A051F",
          950: "#04020D"
        },
        "indigo": {
          50: "#EDE8FC",
          100: "#DFD6FA",
          200: "#BBA8F5",
          300: "#9B7FF0",
          400: "#7851EB",
          500: "#5829E6",
          600: "#4116C0",
          700: "#311192",
          800: "#200B60",
          900: "#110632",
          950: "#080317"
        },
        "delft": {
          50: "#E9E8F2",
          100: "#D2D1E6",
          200: "#A5A3CC",
          300: "#7875B3",
          400: "#535090",
          500: "#393763",
          600: "#2D2C4F",
          700: "#22213B",
          800: "#171627",
          900: "#0B0B14",
          950: "#06050A"
        },
        "amethyst": {
          50: "#F3F2F7",
          100: "#E7E6F0",
          200: "#CBC9DE",
          300: "#B3AFCF",
          400: "#9893BE",
          500: "#7E78AE",
          600: "#5F5893",
          700: "#484370",
          800: "#2F2C49",
          900: "#191726",
          950: "#0C0B13"
        },
        "rosequartz": {
          50: "#F5F4F5",
          100: "#ECE9EC",
          200: "#D9D3D9",
          300: "#C6BEC6",
          400: "#B0A5B0",
          500: "#9E909E",
          600: "#807080",
          700: "#625662",
          800: "#413941",
          900: "#211D21",
          950: "#100E10"
        }
      }
    },
  },
  plugins: [],
})