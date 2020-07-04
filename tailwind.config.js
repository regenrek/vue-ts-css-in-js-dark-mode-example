module.exports = {
    theme: {
        themeVariants: ['dark'],
        extend: {
            colors: {
                primary: '#9cdbff',
                secondary: 'red'
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'dark'],
        textColor: ['responsive', 'dark'],
    },
    plugins: [require('tailwindcss-multi-theme')],
}