/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        s: "375px",
        xs: "799px",
        xl: "1300px",
        xxl: "1500px",
      },
      colors: {
        primary: "#25092c",
        secondary: "#07F307",
        binance_black: "#111518ff",
        binance_ash: "#111518ff",
        binance_yellow: "#fcd535ff",
        binance_white: "#eaecefff",
        // binance_green: "#14cb85ff",
        binance_green: "#38A312",
        binance_brightash: "#6b7f96ff",
        bluish: "#449bc0",
        lightyellow: "#fff47a",
        midorange: "#f69d3c",
        background: "#F1E5C4",
        ash: "#d7d7d7",
        ash2: "#aab2c8",
        ash3: "#6d71a",
        dark_blue: "#061A48",
        grayText: "#6D717A",
        appOrange: "#F2994A",
        appBlue: "#061a48",
        appRed: "#C53A3A",
      },
    },
  },
  plugins: [],
};
