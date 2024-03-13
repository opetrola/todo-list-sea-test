import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

import OrganismSignUpInputContainer from 'organisms/signUp/OrganismSignUpInputContainer.tsx'
import OrganismSignUpButtonContainer from 'organisms/signUp/OrganismSignUpButtonContainer.tsx'

const SignUpScreen = ({ navigation }: INavigationScreen) => {
  const { colors } = useTheme()

  return (
    <View style={[style.container, { backgroundColor: colors.card }]}>
      <OrganismSignUpInputContainer />
      <OrganismSignUpButtonContainer navigate={navigation.navigate} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 18,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

export default SignUpScreen
