/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },

      fontSize: {
        14: "0.875rem",
        15: "0.9375rem",
        28: "1.75rem",
        32: "2rem",
        42: "2.625rem",
        44: "2.75rem",
        46: "2.875rem",
        64: "4rem",
        80: "5rem",
        88: "5.5rem",
      },

      lineHeight: {
        15: "0.9375rem",
        32: "2rem",
        42: "2.625rem",
        44: "2.75rem",
        64: "4rem",
        80: "5rem",
      },

      colors: {
        GrayOne: "#F8F8F8;",
        Graytwo: "#F4F4F4",
        Grayfour: "#bdbdbd",
        lightGray: "#e8e8e8",
        grayDeep: "#4f4f4f",
        Deepgray: "#333333",
        Darkgray: "#2A2D32",
        Semidark: "#434850",
      },

      maxWidth: {
        siteWidth: "1512px",
      },

      spacing: {
        22: "1.375rem",
        30: "1.875rem",
        46: "2.875rem",
        50: "3.125rem",
        57: "3.5625rem",
      },
    },
  },
  plugins: [],
};
