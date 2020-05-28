import { Schema } from "./schema"

export const Collection = {
  name: "bunadmin_setting",
  schema: Schema
}

export const SettingNames = {
  i18n_code: "i18n_code",
  site_name: "site_name",
  theme: "theme",
  role: "role",
  init_status: "init_status"
  // others: init_{team}_{name}, {username}(AuthPrimary)
}
