import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import MoleculeTextInput from '@molecules/MoleculeTextInput.tsx'
import { SignInContext } from '@contexts/SignInContext.tsx'

const OrganismEmailInputContainer = () => {
  const { t } = useTranslation('auth')
  const { password, setPassword, email, setEmail } = useContext(SignInContext)

  return (
    <>
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
    </>
  )
}

export default OrganismEmailInputContainer
