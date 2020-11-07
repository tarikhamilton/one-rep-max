module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: { content: ['./src/**/*.tsx'] },
  theme: {
    extend: {
      inset: {
        '2px': '2px'
      }
    },
  },
  variants: {},
  plugins: [],
}
