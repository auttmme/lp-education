module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet: '630px',
        laptop: '1024px',
        desktop: '1280px',
      },
      container: {
        center: true
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  jit: true
}