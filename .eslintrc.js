module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: 0,
    'react-native/no-inline-styles': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  },
}
