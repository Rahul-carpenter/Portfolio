module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        autofill: "transparent", // Your current autofill color
        darkBg: "#090e16", // Dark navy background (like Manish's)
        gradientStart: "#6A82FB", // Blue gradient start
        gradientEnd: "#FC5C7D",   // Pink gradient end
        primaryText: "#e5e7eb",   // Muted white text color
      },
      backgroundImage: {
        'gradient-to-r-blue-pink': 'linear-gradient(90deg, #6A82FB 0%, #FC5C7D 100%)',
      },
      gridTemplateColumns: {
        40: "repeat(40, minmax(0, 1fr))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lavish: ['"Lavishly Yours"', 'cursive'],
      },
    },
  },
  plugins: [],
};
