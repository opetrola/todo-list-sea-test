import AtomCard from 'atoms/AtomCard.tsx'
import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { UserContext } from 'contexts/UserContext.tsx'
import AtomLabel from 'atoms/AtomLabel.tsx'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'

const OrganismProfileOptionsCard = () => {
  const { t } = useTranslation('auth')
  const { colors } = useTheme()
  const { uid, email, username } = useContext(UserContext)

  const options = [
    {
      title: t('uid'),
      item: uid,
    },
    {
      title: t('username'),
      item: username,
    },
    {
      title: t('email'),
      item: email,
    },
  ]

  return (
    <AtomCard
      customStyle={{
        borderLeftWidth: 4,
        borderColor: colors.text,
      }}>
      {options.map(({ title, item }) => {
        return (
          <View key={`${title}`} style={style.cardItem}>
            <View style={[style.cardContainer, { borderColor: colors.border }]}>
              <AtomLabel text={`${title}: `} />
              <AtomLabel text={item} subtitle />
            </View>
          </View>
        )
      })}
    </AtomCard>
  )
}

const style = StyleSheet.create({
  cardItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  cardContainer: {
    borderBottomWidth: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
})

export default OrganismProfileOptionsCard
