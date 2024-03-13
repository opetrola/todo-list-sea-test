import { useContext } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import MoleculeButton from 'molecules/MoleculeButton.tsx'
import AtomLabel from 'atoms/AtomLabel.tsx'
import { SignInContext } from 'contexts/SignInContext.tsx'

import { onSignIn } from 'firebase_service/auth.ts'
import MoleculeModalLoading from 'molecules/MoleculeModalLoading.tsx'
import { CommonContext } from 'contexts/CommonContext.tsx'

const OrganismEmailButtonContainer = ({ navigate }: InavigateContainer) => {
  const { t } = useTranslation('auth')
  const { email, password } = useContext(SignInContext)
  const { loading, setLoading } = useContext(CommonContext)

  const showAlert = (title: string, message: string) =>
    Alert.alert(title, message, [
      {
        text: t('cancel'),
        style: 'cancel',
      },
    ])

  const handleLoginError = (error: string) => {
    if (error === 'auth/wrong-password') {
      showAlert(t('wrong_credentials_title'), t('wrong_credentials_message'))
    }
  }

  const SignIn = () => {
    setLoading(true)

    onSignIn(
      email,
      password,
      () => {
        setLoading(false)
        navigate('AuthForm')
      },
      error => handleLoginError(error),
    )
  }

  return (
    <>
      <View style={style.buttonContainer}>
        <MoleculeButton
          variation="solid"
          size="md"
          text={t('sign_in')}
          action={() => SignIn()}
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

      <MoleculeModalLoading isLoading={loading} />
    </>
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
