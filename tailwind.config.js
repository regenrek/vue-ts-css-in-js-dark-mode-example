module.exports = {
    theme: {
        linearGradientColors: { 
            'dark-gradient': ['#141E30','#243B55'],
            'light-gradient': ['#E0EAFC', '#CFDEF3'],
        },
        themeVariants: ['light', 'dark'],
        extend: {
            colors: {
                primary: '#9cdbff',
                darkTop: '#141E30',
                darkBottom: '#243B55',
                lightTop: '#E0EAFC',
                lightBottom: '#CFDEF3'
            }
        }
    },
    plugins: [
      require('tailwindcss-gradients'),
    ],
}
