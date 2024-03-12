import { Alert } from 'react-native'
import { useTranslation } from 'react-i18next'

const AtomAlert = (
  title: string,
  message: string,
  submit: () => void,
  cancel: () => void = () => {},
) => {
  const { t } = useTranslation('common')

  return
}

export default AtomAlert
