module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1/24': 'calc(100 / 24 * 1)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
