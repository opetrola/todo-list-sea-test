import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en-us'
import pt from './pt-br'

const resources = {
  en,
  pt,
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  initImmediate: true,
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
