import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import zh from "./zh"
import en from "./en"
import de from "./de"
import { ENV } from "@/utils/config"

export const i18nMenus = [
  { code: "en", name: "English" },
  { code: "zh", name: "简体中文" }
]

export const i18nCodes = {
  de: "de", // as example for now, you can complete it.
  en: "en",
  zh: "zh"
}

i18n
  .use(initReactI18next)
  .init({
    // If your language does not yet exist or has translation problems,
    // please push it and I will merge it as soon as possible.
    // ISO 639-1: https://www.w3schools.com/tags/ref_language_codes.asp
    resources: {
      de, // as example for now, you can complete the translations.
      en,
      zh
    },
    lng: ENV.I18N_CODE,
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["core"],
    defaultNS: "core",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  })
  .then(() => console.info(`[ i18n ]  ${ENV.I18N_CODE}`))

export default i18n
