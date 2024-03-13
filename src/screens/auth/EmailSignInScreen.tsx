import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

import OrganismEmailInputContainer from 'organisms/email/OrganismEmailInputContainer.tsx'
import OrganismEmailButtonContainer from 'organisms/email/OrganismEmailButtonContainer.tsx'

const EmailSignInScreen = ({ navigation }: INavigationScreen) => {
  const { colors } = useTheme()

  return (
    <View style={[style.container, { backgroundColor: colors.card }]}>
      <OrganismEmailInputContainer />
      <OrganismEmailButtonContainer navigate={navigation.navigate} />
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
  buttonContainer: {
    paddingTop: 20,
  },
  cantHaveAccount: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})

export default EmailSignInScreen
