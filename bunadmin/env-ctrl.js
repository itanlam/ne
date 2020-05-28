/**
 * Environment Controller
 */
const { DEV, PROD, STAG } = require('./env')

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  function setEnvKeyValue({ Key }) {
    let ENV
    if (isDev) ENV = "DEV"
    if (isProd) ENV = "PROD"
    if (isStaging) ENV = "STAG"

    // When `yarn build`, this ENV will be undefined always, ignore that.
    // You can check your ENV values in page code.

    let envValue
    switch (ENV) {
      case "DEV":
        envValue = DEV[Key]
        break
      case "PROD":
        envValue = PROD[Key]
        break
      case "STAG":
        envValue = STAG[Key]
        break
      default:
        return `${Key}:not (isDev,isProd && !isStaging,isProd && isStaging)`
    }

    // console.debug(`- : ${ENV}, ${Key}, ${envValue}} `)
    return envValue
  }

  return {
    MAIN_URL: (() => setEnvKeyValue({ Key: "MAIN_URL" }))(),
    AUTH_URL: (() => setEnvKeyValue({ Key: "AUTH_URL" }))(),
    SITE_URLS: (() => setEnvKeyValue({ Key: "SITE_URLS" }))(),
    SITE_NAME: (() => setEnvKeyValue({ Key: "SITE_NAME" }))(),
    ON_I18N: (() => setEnvKeyValue({ Key: "ON_I18N" }))(),
    ON_SETTING: (() => setEnvKeyValue({ Key: "ON_SETTING" }))(),
    I18N_CODE: (() => setEnvKeyValue({ Key: "I18N_CODE" }))(),
  }
}
