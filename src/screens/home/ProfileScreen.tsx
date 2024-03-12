import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const ProfileScreen = () => {
  const { t } = useTranslation('navigation')

  return (
    <View style={style.container}>
      <Text>{t('profile')}</Text>
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

export default ProfileScreen
