const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,css,svelte}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}