/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: "#BE9F56",
        silver: "#737373",
      }, backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans - serif"],
      Lovelight: ["Love Light", "cursive"],
      Oswald: ["Oswald", "cursive"],
    },

    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    screens: {
      sm: "640px",
      smm: "564px",
      smmm: "400px",
      smmmm: "446px",

      //   // => @media (min-width: 550px) { ... }

      md: "768px",

      //   // => @media (min-width: 950px) { ... }

      lg: "1024px",


      xl: "1280px",
      //   // => @media (min-width: 1640px) { ... }



      "2xl": "1536px",
      //   // => @media (min-width: 1536px) { ... }
      "3xl": "1870px",
      "3xxl": "2098px",

    },
  },
  plugins: [

  ],
};
