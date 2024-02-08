/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        statsBackground: "url('/StatsImg2.jpg')",
        buttonGradient: "linear-gradient(90deg, #FFEA55, #6A55FF)",
        mail: "url('/ContactMail.svg')",
        phone: "url('/ContactPhone.svg')",
        facebook: "url('/ContactFacebook.svg')",
        whyUsBackground: "url('/WhyUsImg2.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        little: "-.075e",
      },
      screens: {
        sm: "414px",
        md: "780px",
        lg: "915px",
        xl: "1440px",
      },
      fontFamily: {
        ptsans: ["PT Sans", "Helvetica"],
        quicksand: ["Quicksand", "Helvetica"],
      },
      width: {
        90: "90%",
      },
      fontSize: {
        body: "18px",
        body3: "14px",
        body4: "24px",
        paragraph1: "32px",
        header2: "64px",
      },
      colors: {
        main: "#FFEA55",
        secondary: "#6A55FF",
        backgroundMain: "#121212",
      },
      lineHeight: {
        "extra-loose": "166%",
      },
    },
  },
  plugins: [],
};
