import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

import AtomAuthBackgroundImage from '@atoms/AtomAuthBackgroundImage.tsx'
import OrganismSocialMediaButtons from '@organisms/auth/OrganismSocialMediaButtons.tsx'
import OrganismAuthContainer from '@organisms/auth/OrganismAuthContainer.tsx'
import MoleculeModalLoading from '@molecules/MoleculeModalLoading.tsx'

import { checkOnLogged } from '@firebase_service/auth.ts'

const AuthScreen = ({ navigation }: INavigationScreen) => {
  const { colors } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkOnLogged(
      user => {
        if (!user.error) {
          console.log(user)
          setLoading(false)
          navigation.navigate('Home', { user })
        } else {
          setLoading(false)
        }
      },
      () => {},
    )
  }, [loading, navigation])

  return (
    <>
      <AtomAuthBackgroundImage />
      <View style={[style.container, { backgroundColor: colors.card }]}>
        <OrganismAuthContainer navigate={navigation.navigate} />
        <OrganismSocialMediaButtons />
      </View>

      <MoleculeModalLoading isLoading={loading} />
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
