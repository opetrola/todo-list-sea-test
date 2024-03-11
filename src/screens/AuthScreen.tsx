import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import MoleculeButton from '@molecules/MoleculeButton.tsx'
import { useTranslation } from 'react-i18next'
import AtomLabel from '@atoms/AtomLabel.tsx'

const AuthScreen = () => {
  const { t } = useTranslation('auth')
  const { colors } = useTheme()

  return (
    <View style={[style.container, { backgroundColor: colors.card }]}>
      <View>
        <AtomLabel
          customStyle={{ alignSelf: 'center' }}
          text={t('auth_page_title')}
          size="xxlg"
          weight="bold"
        />
        <AtomLabel
          customStyle={{
            alignSelf: 'center',
            textAlign: 'center',
            marginBottom: 60,
          }}
          text={t('auth_page_text')}
          weight="600"
          subtitle
        />
        <MoleculeButton
          text={t('sign_in')}
          variation="solid"
          size="md"
          rounded
          action={() => {
            console.log('test')
          }}
        />

        <MoleculeButton
          text={t('sign_up')}
          variation="bordered"
          size="md"
          rounded
          action={() => {
            console.log('test')
          }}
        />

        <View style={style.containerSocialMedias}>
          <AtomLabel text={t('sign_up_using')} size="ssm" subtitle />
          <View style={style.socialMedias}></View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  containerSocialMedias: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20,
    flexDirection: 'column',
  },
  socialMedias: {
    flexDirection: 'row',
  },
})

export default AuthScreen
