/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Syncopate: ["Syncopate", "sans-serif"],
      },
      colors: {
        ctaBlue: "#2066DB",
        textBoxGrey: "#F4F4F4",
      },
      fontSize: {
        bodyFontSize: "16px",
        smallTextSize: "14px",
        headingOneSize: "48px",
        headingTwoSize: "24px",
        headingThreeSize: "20px",
      },
    },
  },
  plugins: [],
};
