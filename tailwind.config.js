/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        navColor: "#09a098",
        headerColor: "#55727b",
        movColor: "#234652",
      },
      fontFamily: {
        gilroy: ["Gilroy", "Gilroy Extra", "Century Gothic", "sans-serif"],
      },

      fontWeight: {
        "extra-bold": "800",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(transparent, #d0efec)",
      },
      keyframes: {
        moveFromRightToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "move-right-to-leeft": "moveFromRightToLeft 25s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-circle": {
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          borderWidth: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".custom-class-content": {
          width: "170px",
          height: "170px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem", // Equivalent to text-6xl
          color: "#000000",
        },
        ".custom-class-p": {
          fontFamily: "Lato, tahoma, sans-serif",
          fontSize: " 15.8px",
          fontWeight: 800,
          color: "#234652",
        },
        ".custom-nav": {
          paddingLeft: "1rem", // px-4
          paddingRight: "1rem", // px-4
          height: "50px",
          display: "flex",
          alignItems: "center",
          // width: "300px",
          justifyContent: "space-between",
          borderBottomWidth: "2px",
          borderColor: "#55727b", // Define your nav color here
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },
        ".hover-bg-teal-50:hover": {
          backgroundColor: "#f0fdfa", // The equivalent color code for bg-teal-50
        },
        ".grid-cols-custom": {
          gridTemplateColumns: "250px 500px", // Customize as needed
        },
        ".grid-cols-small": {
          gridTemplateColumns: "0.2fr 1fr",
        },
        ".grid-cols-grid": {
          gridTemplateColumns: "1fr, 0.5fr",
        },
      });
    },
  ],
};
