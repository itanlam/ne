import rxDb from "@/utils/database/rxConnect"
import { SeverityType } from "../types"
import { Collection } from "../collections"
import { Primary } from "../schema"

const collection = Collection.name
const primary = Primary

interface Interface {
  title: string
  severity?: SeverityType | null
  content?: string
}

export default async function noticeController({
  title,
  severity,
  content
}: Interface) {
  const nanoId = require("nanoid")(10)
  const created_at = { created_at: Date.now() }

  try {
    const db = await rxDb()

    const data = { title, severity: severity || "success", content }

    await db[collection].insert({
      [primary]: nanoId,
      ...created_at,
      ...data
    })
  } catch (e) {
    console.error("notice error", e)
  }
}
