module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: '__coverage__',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
}
