import { createI18n } from "vue-i18n";
import enLang from './en'
import idLang from './id'

const messages = {
  en: {
    ...enLang
  },
  id: {
    ...idLang
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'id',
  messages
})

export default i18n