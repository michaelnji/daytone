// import konstaConfig config
// eslint-disable-next-line @typescript-eslint/no-var-requires
const konstaConfig = require("konsta/config");

// wrap config with konstaConfig config
module.exports = konstaConfig({
  konsta: {
    colors: {
      primary: "#7048e8",
      "brand-red": "#f03e3e",
      "brand-green": "#37b24d",
      "brand-orange": "#f76707", 
      "brand-black": "#000", 
      "brand-white": "#fefefe", 
    },
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class", // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
