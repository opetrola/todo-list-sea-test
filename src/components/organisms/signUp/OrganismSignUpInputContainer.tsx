import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import MoleculeTextInput from 'molecules/MoleculeTextInput.tsx'
import { SignUpContext } from 'contexts/SignUpContext.tsx'

const OrganismSignUpInputContainer = () => {
  const { t } = useTranslation('auth')

  const {
    username,
    setUsername,
    password,
    setPassword,
    repeatedPassword,
    setRepeatedPassword,
    email,
    setEmail,
  } = useContext(SignUpContext)

  return (
    <>
      <MoleculeTextInput
        placeholder={t('put_your_username')}
        label={t('username')}
        value={username}
        variation="solid"
        onChangeText={setUsername}
      />

      <MoleculeTextInput
        placeholder={t('put_your_email')}
        label={t('email')}
        value={email}
        variation="solid"
        onChangeText={setEmail}
      />

      <MoleculeTextInput
        placeholder={t('put_your_password')}
        label={t('password')}
        value={password}
        variation="solid"
        onChangeText={setPassword}
      />

      <MoleculeTextInput
        placeholder={t('repeat_your_password')}
        label={t('repeat_password')}
        value={repeatedPassword}
        variation="solid"
        onChangeText={setRepeatedPassword}
      />
    </>
  )
}

export default OrganismSignUpInputContainer
