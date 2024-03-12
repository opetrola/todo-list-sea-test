import { useContext } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import MoleculeButton from '@molecules/MoleculeButton.tsx'
import AtomLabel from '@atoms/AtomLabel.tsx'
import { SignInContext } from '@contexts/SignInContext.tsx'

import { onSignIn } from '@firebase_service/auth.ts'

const OrganismEmailButtonContainer = ({ navigate }: InavigateContainer) => {
  const { t } = useTranslation('auth')
  const { email, password } = useContext(SignInContext)

  const handleLoginError = (error: string) => {
    if (error === 'auth/wrong-password') {
      Alert.alert(
        t('wrong_credentials_title'),
        t('wrong_credentials_message'),
        [
          {
            text: t('cancel'),
            style: 'cancel',
          },
        ],
      )
    }
  }

  return (
    <View style={style.buttonContainer}>
      <MoleculeButton
        variation="solid"
        size="md"
        text={t('sign_in')}
        action={() =>
          onSignIn(
            email,
            password,
            () => {
              navigate('AuthForm')
            },
            error => handleLoginError(error),
          )
        }
      />

      <View style={style.cantHaveAccount}>
        <AtomLabel text={t('cant_have_account')} subtitle />

        <MoleculeButton
          text={` ${t('sign_up')}`}
          size="sm"
          variation="plain"
          action={() => navigate('SignUpForm')}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
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

export default OrganismEmailButtonContainer
