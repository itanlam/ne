/**
 * Environment Variables - More Details
 * You can copy file `env-example-complicated.js` to `env.js`.
 *
 * `MAIN_URL` is required, others are optional.
 * Please leave it undefined if not used.
 */

const I18N_CODE = "en" // Default i18n code, resources: ./src/utils/i18n/

const obj = {
  dev: {
    main: "http://192.168.2.2:51800/api/v1", // main
    auth: "http://192.168.2.2:51801/api/v1", // user
    sites: {
      0: "http://192.168.2.2:51802/api/v1", // shop
      1: "http://192.168.2.2:51803/api/v1", // file
      2: "http://bucket-name.s3-website.Region.amazonaws.com/", // S3
      3: "http://192.168.2.2:51804/api/v1", // blog
    },
    name: "Bunadmin DEV",
    on_18n: true,      // I18N Menu
    on_setting: true,  // Setting Menu
  },
  prod: {
    main: "http://www.bunadmin.com/api/v1", // main
    auth: "http://user.bunadmin.com/api/v1", // user
    sites: {
      0: "http://shop.bunadmin.com/api/v1", // shop
      1: "http://file.bunadmin.com/api/v1", // file
      2: "http://bucket-name.s3-website.Region.amazonaws.com/", // S3
      3: "http://blog.bunadmin.com/api/v1", // blog
    },
    name: "Bunadmin PROD",
    on_18n: false,
    on_setting: false,
  },
  stag: {
    main: "http://stag.main.com/api/v1", // main
    auth: "http://stag.user.com/api/v1", // user
    sites: {
      0: "http://stag.shop.com/api/v1", // shop
      1: "http://stag.file.com/api/v1", // file
      2: "http://bucket-name.s3-website.Region.amazonaws.com/", // S3
      3: "http://stag.blog.com/api/v1", // blog
    },
    name: "Bunadmin STAG",
    on_18n: false,
    on_setting: false,
  },
}

module.exports = {
  DEV: {
    I18N_CODE,
    MAIN_URL: obj.dev.main,
    AUTH_URL: obj.dev.auth,
    SITE_URLS: `${obj.dev.sites[0]}, ${obj.dev.sites[1]}, ${obj.dev.sites[2]}`,
    SITE_NAME: obj.dev.name,
    ON_I18N: obj.dev.on_18n,
    ON_SETTING: obj.dev.on_setting,
  },
  PROD: {
    I18N_CODE,
    MAIN_URL: obj.prod.main,
    AUTH_URL: obj.prod.auth,
    SITE_URLS: `${obj.prod.sites[0]}, ${obj.prod.sites[1]}, ${obj.prod.sites[2]}`,
    SITE_NAME: obj.prod.name,
    ON_I18N: obj.prod.on_18n,
    ON_SETTING: obj.prod.on_setting,
  },
  STAG: {
    I18N_CODE,
    MAIN_URL: obj.stag.main,
    AUTH_URL: obj.stag.auth,
    SITE_URLS: `${obj.stag.sites[0]}, ${obj.stag.sites[1]}, ${obj.stag.sites[2]}`,
    SITE_NAME: obj.stag.name,
    ON_I18N: obj.stag.on_18n,
    ON_SETTING: obj.stag.on_setting,
  }
}
