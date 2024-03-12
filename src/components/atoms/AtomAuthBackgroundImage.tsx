import { Dimensions, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import SvgUri from 'react-native-svg-uri'

const AtomAuthBackgroundImage = () => {
  const { colors } = useTheme()

  return (
    <View style={[style.container, { backgroundColor: colors.card }]}>
      <SvgUri
        source={require('@images/auth_background_image.svg')}
        height={'100%'}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 2.5,
  },
})

export default AtomAuthBackgroundImage
