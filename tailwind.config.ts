import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gothic: {
          50: '#f5f5f6',
          100: '#e6e7e9',
          200: '#d1d3d7',
          300: '#a3a7b3',
          400: '#7d8292',
          500: '#636977',
          600: '#4d5260',
          700: '#3f434e',
          800: '#363a42',
          900: '#24262c',
          950: '#1a1b1f',
        },
      },
      fontFamily: {
        gothic: ['var(--font-gothic)', 'serif'],
        modern: ['var(--font-modern)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

export default config
