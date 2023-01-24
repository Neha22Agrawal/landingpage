/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B4E66",
        
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Metropolis: ["Metropolis"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundImage: {
      // used in our expertise element component
      gradientOne:
        "linear-gradient(247.37deg, rgba(255, 86, 48, 0.72) -10.37%, rgba(6, 29, 45, 0.36) 79.15%)",
      gradientTwo:
        "linear-gradient(246.09deg, rgba(123, 97, 255, 0.71) -16.07%, rgba(6, 29, 45, 0.36) 94.2%)", }
  },
  plugins: [],
}
