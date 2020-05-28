import { Collection as Auth } from "@/core/auth/collections"
import { Collection as Setting } from "@/core/setting/collections"
import rxDb from "@/utils/database/rxConnect"
import { Primary } from "@/core/auth/schema"

export default async function storedToken() {
  const authStore = Auth.name
  const setting = Setting.name
  const db = await rxDb()

  // query username from bunadmin_setting
  const settingRes = await db[setting]
    .findOne()
    .where("name")
    .eq(Primary)
    .exec()
  const username = (settingRes && settingRes.value) || ""

  // query user from auth_store
  const localUser = await db[authStore]
    .findOne()
    .where(Primary)
    .eq(username)
    .exec()

  return localUser && localUser.token
}
