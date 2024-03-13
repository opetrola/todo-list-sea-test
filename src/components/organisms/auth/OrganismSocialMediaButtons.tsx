import { Dimensions, StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'

import AtomLabel from 'atoms/AtomLabel.tsx'
import MoleculeIconButton from 'molecules/MoleculeIconButton.tsx'

const OrganismSocialMediaButtons = () => {
  const { t } = useTranslation('auth')
  const { colors } = useTheme()

  return (
    <View style={style.container}>
      <AtomLabel text={t('sign_up_using')} size="ssm" subtitle />

      <View style={style.socialMedias}>
        <MoleculeIconButton name="logo-github" size="xlg" color={colors.text} />
        <MoleculeIconButton name="logo-google" size="xlg" />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  socialMedias: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 4,
  },
})

export default OrganismSocialMediaButtons
