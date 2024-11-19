module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        autofill: "transparent", // Replace with your desired background color
      },
      gridTemplateColumns: {
        // Add custom grid template columns
        40: "repeat(40, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
