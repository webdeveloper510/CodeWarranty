module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        large: "90%",
        1366: "1095px",
        tablet: "880px",
      },
      backgroundImage: {
        "headerBackground": "url('/src/assets/images/Mask group.png')",
        "headerBackground1": "url('/src/assets/images/banner1.png')",
      },
      backgroundClip: {
        text: "text", // Add this line
      },
      dropShadow: {
        "3xl": "0 4px 84px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 0px 100px rgba(0, 0, 0, 0.15)",
        "5xl": "0px 4.979px 29.872px rgba(0, 0, 0, 0.25)",
        header: "0px 7px 14px 0px #00000014",
      },
      boxShadow: {
        "6xl": "-11px -4px 11px 20px #f9f9f9",
      },
      screens: {
        s: "320px",

        sm: "580px",

        md: "680px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",

        "3xl": "1980px",

        "4xl": "2570px",
      },
    },
  },
  plugins: [],
}