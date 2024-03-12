module.exports = {
  dependencies: {
    ...(process.env.CI
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
}
