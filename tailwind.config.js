/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgColor:"#0A192F",
      primaryColor:"#64FFDA",
      textColor:"#8892B0"
     
    }
  },
  plugins: [],
}