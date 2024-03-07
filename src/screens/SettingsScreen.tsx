import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const SettingsScreen = () => {
  const { t } = useTranslation('common')

  return (
    <View style={styles.container}>
      <Text>{t('settings')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SettingsScreen
