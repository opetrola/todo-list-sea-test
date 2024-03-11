import AtomLabel from '@atoms/AtomLabel.tsx'
import MoleculeButton from '@molecules/MoleculeButton.tsx'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const OrganismAuthBlock = () => {
  const { t } = useTranslation('auth')

  return (
    <View style={style.container}>
      <AtomLabel
        customStyle={style.titleStyle}
        text={t('auth_page_title')}
        size="xlg"
        weight="bold"
      />

      <AtomLabel
        customStyle={style.subtitleStyle}
        text={t('auth_page_text')}
        subtitle
      />

      <View>
        <MoleculeButton
          text={t('sign_in')}
          variation="solid"
          size="sm"
          action={() => {
            console.log('test')
          }}
        />

        <MoleculeButton
          text={t('sign_up')}
          variation="bordered"
          size="sm"
          action={() => {
            console.log('test')
          }}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleStyle: {
    alignSelf: 'center',
  },
  subtitleStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingBottom: 30,
  },
})

export default OrganismAuthBlock
