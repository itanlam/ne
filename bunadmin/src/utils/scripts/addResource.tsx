import requirePlugins from "@/utils/scripts/requirePlugins"
import { i18nCodes } from "@/utils/i18n"

export default function addResource({
  i18n,
  team,
  group
}: {
  i18n: any
  team: string
  group: string
}) {
  Object.keys(i18nCodes).map(lan => {
    const lang: any = requirePlugins(`${team}-${group}/utils/i18n/${lan}`)

    if (!lang) return

    lang.plugins &&
      i18n.addResourceBundle(lan, "plugins", lang.plugins, true, true)

    lang.table && i18n.addResourceBundle(lan, "table", lang.table, true, true)
  })
}
