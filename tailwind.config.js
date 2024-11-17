/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      sm: "0.5rem",
      "4xl": "1.875rem",
    },
    extend: {
      backgroundImage: {
        "exotic-gradient":
          "linear-gradient(65.13deg, rgba(255, 0, 153, 0.5) -6.69%, rgba(255, 0, 153, 0.25) 53.29%)",

        "mythical-gradient":
          "linear-gradient(65.13deg, rgba(221, 41, 41, 0.5) -6.69%, rgba(221, 41, 41, 0.25) 53.29%)",

        "legendary-gradient":
          "linear-gradient(65.13deg, rgba(221, 164, 41, 0.5) -6.69%, rgba(221, 164, 41, 0.25) 53.29%)",

        "epic-gradient":
          "linear-gradient(65.13deg, rgba(95, 41, 221, 0.5) -6.69%, rgba(95, 41, 221, 0.25) 53.29%)",

        "rare-gradient":
          "linear-gradient(65.13deg, rgba(0, 132, 243, 0.47451) -6.69%, rgba(0, 132, 243, 0.25) 53.29%)",

        "unusual-gradient":
          "linear-gradient(65.13deg, rgba(0, 243, 8, 0.47451) -6.69%, rgba(0, 243, 8, 0.25) 53.29%)",

        "common-gradient":
          "linear-gradient(65.13deg, rgba(137, 137, 137, 0.47451) -6.69%, rgba(137, 137, 137, 0.25) 53.29%)",
      },
      backgroundColor: {
        "dark-blue-opacity-90": "rgba(4, 13, 19, 0.94)",
        "dark-blue-opacity-30": "rgba(4, 13, 19, 0.30)",
      },
      colors: {
        "color-exotic": "#FF0099",
        "color-mythical": "#DD2929",
        "color-legendary": "#DDA429",
        "color-epic": "#5F29DD",
        "color-rare": "#0084F3",
        "color-unusual": "#00F308",
        "color-common": "#898989",

        "gray-border": "#FFFFFF26",
      },
      borderWidth: {
        1: "1px",
      },
      animation: {
        scroll: "scrollAnimation 10s linear infinite",
      },
      keyframes: {
        scrollAnimation: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
