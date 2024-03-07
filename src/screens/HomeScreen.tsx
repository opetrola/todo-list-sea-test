import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const { t } = useTranslation('common')

  return (
    <View style={style.container}>
      <Text>{t('home')}</Text>
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

export default HomeScreen
