function strToArr(str?: string) {
  if (!str) return []
  return str.split(/[ ,]+/)
}

interface EnvTypes {
  MAIN_URL: string
  AUTH_URL: string
  SITE_URLS: string[]
  SITE_NAME: string
  ON_I18N: boolean
  ON_SETTING: boolean
  I18N_CODE: string
}

export const ENV = {
  MAIN_URL: process.env.MAIN_URL,
  AUTH_URL: process.env.AUTH_URL || process.env.MAIN_URL,
  SITE_URLS: strToArr(process.env.SITE_URLS),
  SITE_NAME: process.env.SITE_NAME || "BunAdmin",
  ON_I18N: process.env.ON_I18N || false,
  ON_SETTING: process.env.ON_SETTING || false,
  I18N_CODE: process.env.I18N_CODE || "en"
} as EnvTypes
