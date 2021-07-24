module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'maldives': ['maldives', 'sans-serif']
    },
    extend: {
      colors: {
        'mongoose': {
          '50': '#fbfbf9', 
          '100': '#f8f6f3', 
          '200': '#ede9e0', 
          '300': '#e3dbce', 
          '400': '#cdc0a9', 
          '500': '#b8a584', 
          '600': '#a69577', 
          '700': '#8a7c63', 
          '800': '#6e634f', 
          '900': '#5a5141'
        },
        'rose-bud': {
          '50': '#fffbfa', 
          '100': '#fef6f5', 
          '200': '#fde9e5', 
          '300': '#fcdcd5', 
          '400': '#f9c2b6', 
          '500': '#f7a896', 
          '600': '#de9787', 
          '700': '#b97e71', 
          '800': '#94655a', 
          '900': '#79524a'
        },
        'almond': {
          '50': '#fefdfc', 
          '100': '#fdfbf9', 
          '200': '#faf6f1', 
          '300': '#f7f0e8', 
          '400': '#f1e4d7', 
          '500': '#ebd9c6', 
          '600': '#d4c3b2', 
          '700': '#b0a395', 
          '800': '#8d8277', 
          '900': '#736a61'
        },
        'apricot-peach': {
          '50': '#fffcfb', 
          '100': '#fef9f6', 
          '200': '#fdf1e9', 
          '300': '#fce8dc', 
          '400': '#f9d7c1', 
          '500': '#f7c6a7', 
          '600': '#deb296', 
          '700': '#b9957d', 
          '800': '#947764', 
          '900': '#796152'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
