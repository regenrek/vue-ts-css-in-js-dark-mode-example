// postcss.config.js
// const autoprefixer = require('autoprefixer');
// const tailwindcss = require('tailwindcss');
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};