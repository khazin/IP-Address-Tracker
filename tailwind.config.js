module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubikSans: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        sm: "400",
        md: "500",
        lg: "700",
      },
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      screens: {
        tablet: "786px",
        desktop: "1366px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
