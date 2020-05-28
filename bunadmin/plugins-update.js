const path = require("path")

const savePath = path.resolve(__dirname, "plugins-info.json")
const pluginsPath = path.resolve(__dirname, "./plugins")

const pluginsPrefixUrl =
  "https://raw.githubusercontent.com/bunred/bunadmin-plugins/master/navigation"
const pluginsInfoArr = require("./plugins-info.json") || []

const { syncPlugins } = require("@bunred/sync-plugins")

const bunadmin_plugin_strapi_user = {
  "enable": true,
  "name": "bunadmin strapi user authentication",
  "version": "1.0.0-alpha.1",
  "description": "authentication, user query",
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/bunred/bunadmin-plugin-strapi-user.git"
  },
  "keywords": [
    "user",
    "auth"
  ],
  "homepage": "https://github.com/bunred/bunadmin-plugin-strapi-user",
  "plugin-id": "bunadmin-plugin-strapi-user",
  "plugin-navigation": "authentication",
  "plugin-author": "bunred",
  "plugin-folder": "buncms-user",
  "plugin-version": "1.0.1",
  "plugin-bunadmin-version": "1.0.1",
  "plugin-download": {
    "type": "git",
    "url": "https://github.com/bunred/bunadmin-plugin-strapi-user/archive/1.0.1.zip"
  }
}

syncPlugins({ savePath, pluginsPath, pluginsPrefixUrl, pluginsInfoArr, bunadmin_plugin_strapi_user })

