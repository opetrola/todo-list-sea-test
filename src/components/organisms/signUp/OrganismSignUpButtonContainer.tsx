import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import MoleculeButton from '@molecules/MoleculeButton.tsx'
import AtomLabel from '@atoms/AtomLabel.tsx'

import { SignUpContext } from '@contexts/SignUpContext.tsx'
import { onSignUp } from '@firebase_service/auth.ts'

const OrganismSignUpButtonContainer = ({ navigate }: InavigateContainer) => {
  const { t } = useTranslation('auth')

  const { username, password, repeatedPassword, email } =
    useContext(SignUpContext)

  const SignUp = () => {
    onSignUp(
      email,
      username,
      password,
      repeatedPassword,
      () => navigate('AuthForm'),
      error => {
        console.log('error component', error)
      },
    )
  }
  return (
    <View style={style.buttonContainer}>
      <MoleculeButton
        variation="solid"
        size="md"
        text={t('sign_up')}
        action={SignUp}
      />

      <View style={style.alreadyHaveAccount}>
        <AtomLabel text={t('already_have_account')} subtitle />

        <MoleculeButton
          text={` ${t('return_to_login')}`}
          size="sm"
          variation="plain"
          action={() => navigate('AuthForm')}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
    paddingTop: 20,
  },
  alreadyHaveAccount: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})

export default OrganismSignUpButtonContainer
