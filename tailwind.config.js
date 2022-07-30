const defaultTheme = require("tailwindcss/defaultTheme"),
    plugin = require("tailwindcss/plugin");

module.exports = {
  mode:'jit',
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/auth/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Arial': ['Arial', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#fff',
        light: '#f9f9f9',
        black: '#000000',
        dark: '#212142'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semibold: 500,
        bold: 700
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      'xs': '480px',
      'sm': '575px',
      'md': '767px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1440px',
      '3xl': '1600px'
    }
  },
  plugins: [
    plugin( function ({ addComponents, addBase, theme }){
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
        'h4': { fontSize: theme('fontSize.xl') },
        'h5': { fontSize: theme('fontSize.lg') },
        'h6': { fontSize: theme('fontSize.base') },
        'p': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.normal') },
        'span': { fontSize: theme('fontSize.sm'), fontWeight: theme('fontWeight.normal') },
        'a': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.normal') }
      });
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '95%'
          },
          '@screen sm': {
            maxWidth: '95%'
          },
          '@screen md': {
            maxWidth: '90%'
          },
          '@screen lg': {
            maxWidth: '90%'
          },
          '@screen xl': {
            maxWidth: '90%'
          },
          '@screen xxl': {
            maxWidth: '90%'
          },
          '@screen 3xl': {
            maxWidth: '80%'
          },

        },
      });
    })
  ]
}