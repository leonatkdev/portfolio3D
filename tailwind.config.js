/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        MainTextColor: "#000624",
        SecondaryTextColor: "#6F7679",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "costume": "rgb(29 24 54 / 88%)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
        "custom-gradient": "linear-gradient(to bottom, #6366f1,#6366f1 ,#6366f1d1,rgb(99 102 241 / 15%))",
        "costume-gradientTwo": "linear-gradient(to bottom, #110C24 ,#110C24 ,#110C24,rgb(99 102 241 / 15%))",
        "midnight-city": "linear-gradient(to bottom, #232526, #414345)",
        "forest": "linear-gradient(to bottom, #e6dada, #274046)"
      },
      backgroundColor: {
        mainBackground: "#F3F5F6",
        moduleBackground: "#fff",
        tabsBackground: "#fff",
        tabshoverBackground: "#F9FAFB",
        hoverBackground: "#f8faff"
      },
      borderColor:{
        mainborderColor: "#dfe5eb"
      }

    },
  },
  plugins: [],
};
