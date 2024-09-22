import { createI18n } from "vue-i18n";
import enLang from './en'
import chLang from './ch'

const messages = {
  en: {
    ...enLang
  },
  ch: {
    ...chLang
  }
}

const i18n = createI18n({
  legacy: false,
  // locale: localStorage.getItem('lang') || 'en',
  locale: 'en',
  fallbackLocale: 'ch',
  messages
})

export default i18n