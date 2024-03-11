import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import AtomAuthBackgroundImage from '@atoms/AtomAuthBackgroundImage.tsx'
import OrganismSocialMediaButtons from '@organisms/OrganismSocialMediaButtons.tsx'
import OrganismAuthBlock from '@organisms/OrganismAuthBlock.tsx'

const AuthScreen = () => {
  const { colors } = useTheme()

  return (
    <>
      <AtomAuthBackgroundImage />
      <View style={[style.container, { backgroundColor: colors.card }]}>
        <OrganismAuthBlock />
        <OrganismSocialMediaButtons />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  containerSocialMedias: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  socialMedias: {
    flexDirection: 'row',
  },
})

export default AuthScreen
