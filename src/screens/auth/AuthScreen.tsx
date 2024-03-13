import { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

import AtomAuthBackgroundImage from 'atoms/AtomAuthBackgroundImage.tsx'
import OrganismSocialMediaButtons from 'organisms/auth/OrganismSocialMediaButtons.tsx'
import OrganismAuthContainer from 'organisms/auth/OrganismAuthContainer.tsx'
import MoleculeModalLoading from 'molecules/MoleculeModalLoading.tsx'

import { OnCheckLogged } from 'firebase_service/auth.ts'
import { CommonContext } from 'contexts/CommonContext.tsx'

const AuthScreen = ({ navigation }: INavigationScreen) => {
  const { colors } = useTheme()
  const { loading, setLoading } = useContext(CommonContext)

  const checkLogged = () => {
    setLoading(true)

    OnCheckLogged(
      user => {
        if (!user.error) {
          setLoading(false)
          navigation.navigate('Home', { user })
        } else {
          setLoading(false)
        }
      },
      () => {
        setLoading(false)
      },
    )
  }

  useEffect(() => {
    checkLogged()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
