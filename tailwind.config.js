const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        boska: ["Boska", 'Arial', 'sans-serif'],
        switzer: ["Switzer", 'Arial', 'sans-serif']
      },
      colors: {
        primary1: "#A79277",
        primary2: "#D1BB9E",
        primary3: "#EAD8C0",
        primary4: "#FFF2E1",
        primary5: "#FFF9F0",
        neutral1: "#FAFAFA",
        neutral2: "#D9D9D9",
        neutral3: "#8D8D8D",
        neutral4: "#424242",
        neutral5: "#3B3B3B"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

