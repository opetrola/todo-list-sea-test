module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.test.tsx',
        ],
        alias: {
          tests: ['./__tests__'],
          src: './src',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          screens: './src/screens',
          templates: './src/templates',
          assets: './assets',
          images: './assets/images',
          contexts: './src/contexts',
          utils: './src/utils',
          navigation: './src/navigation',
          firebase_service: './src/firebase',
        },
      },
    ],
  ],
}
