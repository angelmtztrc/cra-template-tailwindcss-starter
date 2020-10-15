// Add your custom configurations
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#61DAFB',
        secondary: '#282C34'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    }
  },
  variants: {},
  plugins: []
};
