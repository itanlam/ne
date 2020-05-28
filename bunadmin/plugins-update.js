const path = require("path")

const savePath = path.resolve(__dirname, "plugins-info.json")
const pluginsPath = path.resolve(__dirname, "./plugins")

const pluginsPrefixUrl =
  "https://raw.githubusercontent.com/bunred/bunadmin-plugins/master/navigation"
const pluginsInfoArr = require("./plugins-info.json") || []

const { syncPlugins } = require("@bunred/sync-plugins")

syncPlugins({ savePath, pluginsPath, pluginsPrefixUrl, pluginsInfoArr })
