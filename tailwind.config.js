/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#212121",
        green: "#00FA00",
      },
      fontFamily: {
        SpoqaHanSansNeo: "Spoqa Han Sans Neo",
      },
    },
  },
  plugins: [],
};
