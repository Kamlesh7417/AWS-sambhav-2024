/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        saffron: '#FF9933',
        navy: '#000080',
        green: {
          india: '#138808'
        },
        peacock: {
          light: '#50C4ED',
          DEFAULT: '#0099CC',
          dark: '#006B8F'
        }
      }
    }
  },
  plugins: []
}