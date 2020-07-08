// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('./packages/tailwindcss-theming/dist/index.js')

console.log("PAAAATH", path.dirname(__filename))

module.exports = {
    theme: {
        fontFamily: {
            body: ['VT323', 'sans-serif']
        },
        linearGradientColors: { 
            'dark-gradient': ['#141E30','#243B55'],
            'light-gradient': ['#E0EAFC', '#CFDEF3'],
        },
        themeVariants: ['light', 'dark', 'default']
    },
    plugins: [
      require('tailwindcss-gradients'),
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      tailwindcss
    ],
}
