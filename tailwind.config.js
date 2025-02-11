const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothic': [
          'Nosifer', // Creepy, horror-style font
          'Creepster', // Playful horror font
          'Macabre', // Custom gothic font
          ...defaultTheme.fontFamily.sans
        ],
        'blood': [
          'Butcherman', // Blood-dripping style font
          'Creepster',
          ...defaultTheme.fontFamily.serif
        ]
      },
      colors: {
        gothic: {
          50: '#f8f1f1',
          100: '#e6d3d3',
          200: '#d4b5b5',
          300: '#c29797',
          400: '#b07979',
          500: '#9e5b5b',
          600: '#8c3d3d',
          700: '#7a1f1f',
          800: '#681111',
          900: '#560303',
          950: '#440000'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#c29797', // Pale gothic text color
            a: {
              color: '#b07979',
              '&:hover': {
                color: '#9e5b5b'
              }
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
