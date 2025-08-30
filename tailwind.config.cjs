
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // React files to scan
  ],  
    safelist: [
    'font-primary',
    'font-secondary',
  ],
  theme: {
    container:{
        padding:{
            DEFAULT:'15px',
        }
    },

    screens:{
        sm : '640px',
        md : '780px',
        lg : '960px',
        xl : '1200px',
    }, 
    fontFamily:{
        primary: ['DM Serif Display'],
        secondary : ['Jost'],
    },

    extend: {    

    backgroundImage:{
        hero:'url(src/assets/hero/bg.jpg)',        
        grid:'url(src/assets/grid.png)',        
    },
        colors:{
            primary:{
                DEFAULT:'#292f36',
                hover:'#343e4a',
            },
            secondary:'#4d5053',
            accent: '#cda274',
            accentt:{
                DEFAULT:'#cda274',
                secondary:'#f4fBec',
                hover:'#b88c5d',  
            },
          
        },
    },
  },
  plugins: [],
};