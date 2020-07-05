// eslint-disable-next-line @typescript-eslint/no-var-requires
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),

        process.env.NODE_ENV === 'production'
        ? purgecss({
            content: ['./src/**/*.html', './src/**/*.vue'],
        })
        : '',
        ]
}