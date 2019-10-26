const { colors, maxWidth, width, height } = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      width: {
        "5/17": "30.1111111%",
      },
      height: {
        "h-58": "14.6rem",
      },
    },
    maxWidth: {
      ...maxWidth,
      custom: "40%",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
