/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        bgColor:"#112240",
        primaryColor:"#64FFDA",
        textColor:"#8892B0"
       
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
     screens: {

      'sm': '476px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    

      '2xl-mx': {'max': '1535px'},
      'xl-mx': {'max': '1279px'},
      'lg-mx': {'max': '1023px'},
      'md-mx': {'max': '767px'},
      'sm-mx': {'max': '639px'},
      'xs-mx': {'max' : '475px'},
         
    },

  
  },
  plugins: [],
}