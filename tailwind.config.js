module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Send Flowers"],
      },
      backgroundImage: {
        site: "url('/tiny-checkers.svg')",
      },
    },
  },
  plugins: [],
};
