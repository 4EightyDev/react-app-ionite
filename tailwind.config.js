/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx}"],
     darkMode: 'class',
     theme: {
          container: {
               center: true,
               padding: '1rem',
               screens: {
                    '2xl': '1440px',
               }
          },
          fontSize: {
               base: ['1rem', { lineHeight: '2rem' }],
               lg: ['1.125rem', { lineHeight: '1.75rem' }],
               xl: ['1.25rem', { lineHeight: '2rem' }],
               '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
               '3xl': ['2rem', { lineHeight: '2.5rem' }],
               '4xl': ['2.5rem', { lineHeight: '3rem' }],
               '5xl': ['3rem', { lineHeight: '3.5rem' }],
               '6xl': ['3.75rem', { lineHeight: '1' }],
               '7xl': ['4.5rem', { lineHeight: '1' }],
               '8xl': ['6rem', { lineHeight: '1' }],
               '9xl': ['8rem', { lineHeight: '1' }],
          },
          screens: {
               'sm': '576px',
               'md': '768px',
               'lg': '1024px',
               'xl': '1280px',
               '2xl': '1536px',
          },
          extend: {
               fontFamily: {
                    sans: ['Mont'],
                    display: ['Mont'],
               },
               maxWidth: {
                    '8xl': '88rem',
               },
          },
     },
     plugins: [],
};