/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {},
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

    colors: {
      bgColor:"#0A192F",
      primaryColor:"#64FFDA",
      textColor:"#8892B0"
     
    }
  },
  plugins: [],
}