/**
 * Environment Variables
 * Please copy file `env-example.js` to `env.js`.
 *
 * `MAIN_URL` is required, others are optional.
 * Please leave it undefined if not used.
 */

const I18N_CODE = "en" // Default i18n code, resources: ./src/utils/i18n/

module.exports = {
  DEV: {
    I18N_CODE,
    MAIN_URL: "http://192.168.2.2:51800/api/v1",
    AUTH_URL: "http://192.168.2.2:51801/api/v1",
    SITE_URLS: "http://192.168.2.2:51802/api/v1, http://192.168.2.2:51803/api/v1",
    SITE_NAME: "BunAdmin DEV",
    ON_I18N: true,    // I18N Menu
    ON_SETTING: true, // Setting Menu
  },
  PROD: {
    I18N_CODE,
    MAIN_URL: "http://www.bunadmin.com/api/v1",
    AUTH_URL: "http://user.bunadmin.com/api/v1",
    SITE_URLS: "http://doc.bunadmin.com/api/v1, http://blog.bunadmin.com/api/v1",
    SITE_NAME: "BunAdmin PROD",
    ON_I18N: true,
    ON_SETTING: false,
  },
  STAG: {
    I18N_CODE,
    MAIN_URL: "http://10.0.0.2:51800/api/v1",
    AUTH_URL: undefined,
    SITE_URLS: undefined,
    SITE_NAME: "BunAdmin STAG",
    ON_I18N: true,
    ON_SETTING: undefined,
  }
}
