/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.1)",
        deeppink: "#e20074",
        lightgray: "rgba(227, 209, 209, 0.1)",
        snow: "#fef9f9",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "6xl": "25px",
        "81xl": "100px",
        "11xl": "30px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      xl: "20px",
      "29xl": "48px",
      "5xl": "24px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
