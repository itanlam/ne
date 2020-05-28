const envCtrl = require("./env-ctrl")
const path = require("path")
const FileHound = require("filehound")
const fs = require("fs")
const chalk = require("chalk")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})

module.exports = phase => {
  const env = envCtrl(phase)

  // Enable plugins START
  console.log(chalk.white("- Enabling bunadmin plugins ..."))

  // Generate pluginsData.json START
  console.log(chalk.white("  · generating pluginsData.json ..."))
  // find all plugin initData files
  const pluginsPath = path.resolve("plugins")
  const pluginsInitFiles = FileHound.create()
    .paths(pluginsPath)
    .match("initData.tsx")
    .findSync()
  let jsonStr = JSON.stringify(pluginsInitFiles)

  // replace to {team}-{group} path
  jsonStr = jsonStr.replace(/\\\\/g, "/")
  jsonStr = jsonStr.replace(/".*?\/plugins\/(.*?)"/gm, `"$1"`)

  const name = "pluginsData.json"
  const savePath = path.resolve(__dirname, "plugins", name)
  fs.writeFile(savePath, jsonStr, "utf8", () => {
    console.log(chalk.white("  · generation complete!"))

    // Enable plugins END
    console.log(chalk.blue("- Bunadmin plugins are enabled."))
  })
  // Generate pluginsData.json END

  return withMDX({
    env,
    poweredByHeader: false,
    generateBuildId: async () => {
      return "bunadmin-v1"
    },
    // webpack
    webpack: config => {
      // alias
      config.resolve.alias["@"] = path.resolve(__dirname, "src")
      config.resolve.alias["@plugins"] = path.resolve(__dirname, "plugins")
      // rules
      config.module.rules.push({
        // ignore file or file types
        test: /\.md$|LICENSE$/,
        use: [{ loader: "ignore-loader" }]
      })
      return config
    }
  })
}
