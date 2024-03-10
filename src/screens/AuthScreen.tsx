import { StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'
import MoleculeButton from '@molecules/MoleculeButton.tsx'

const AuthScreen = () => {
  const { t } = useTranslation('navigation')
  const { colors } = useTheme()

  return (
    <View style={[style.container, { backgroundColor: colors.card }]}>
      <View>
        <MoleculeButton text={'test'} action={() => {}} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AuthScreen
