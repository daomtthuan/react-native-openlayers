module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        alias: {
          '@': './',
        },
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
