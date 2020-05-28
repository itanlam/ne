import rxInitData from "@/utils/database/rxInitData"
import { Collection as Setting, SettingNames } from "@/core/setting/collections"
import initDocsData from "@/utils/database/rxInitData/initDocsData"
import requirePlugins from "@/utils/scripts/requirePlugins"
import rxDb from "@/utils/database/rxConnect"
import { Primary as AuthPrimary } from "@/core/auth/schema"
import { ENV } from "@/utils/config"

interface InitData {
  plugin: string
  list: {
    name: string
    data: any
  }[]
}

export default async function initData() {
  const db = await rxDb()

  // Init Core Setting Data
  await rxInitData({
    db,
    collection: Setting.name,
    name: SettingNames.init_status,
    initFunc: () =>
      initDocsData({
        db,
        collection: Setting.name,
        docsData: [
          {
            name: SettingNames.i18n_code,
            value: ENV.I18N_CODE
          },
          {
            name: AuthPrimary, // username
            value: undefined
          },
          {
            name: SettingNames.role,
            value: undefined
          },
          {
            name: SettingNames.site_name,
            value: undefined
          },
          {
            name: SettingNames.theme,
            value: undefined
          }
        ]
      })
  })

  // Init Plugins Data
  const pluginsData = require("@plugins/pluginsData")
  pluginsData.map(async (path: string) => {
    const fileContent: any = requirePlugins(path)

    if (!fileContent) return

    const initData: InitData = fileContent.default

    // Init Plugin's Data
    await rxInitData({
      db,
      collection: Setting.name,
      name: `init-${initData.plugin}`,
      initFunc: async () => {
        // Loop init DocsData
        initData.list.map(async item => {
          await initDocsData({
            db,
            collection: item.name,
            docsData: item.data
          })
        })
      }
    })
  })
}
