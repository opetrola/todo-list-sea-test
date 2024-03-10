import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const ScheduleScreen = () => {
  const { t } = useTranslation('navigation')

  return (
    <View style={styles.container}>
      <Text>{t('schedule')}</Text>
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

export default ScheduleScreen
