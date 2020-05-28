/**
 * !!!DEBUG ONLY
 * Do not enable `auth migration` in production environment
 */
// import { Collection as auth } from "../auth/collections"
// import { Columns as auth_columns } from "../auth/columns"

import { Collection as menu } from "../menu/collections"
import { Collection as notice } from "../notice/collections"
import { Collection as schema } from "../schema/collections"
import { Collection as setting } from "../setting/collections"

import { Columns as menu_columns } from "../menu/columns"
import { Columns as notice_columns } from "../notice/columns"
import { Columns as schema_columns } from "../schema/columns"
import { Columns as setting_columns } from "../setting/columns"

export const Data = ({ t }: { t: any }) => [
  // { name: auth.name, columns: auth_columns({ t }) }, // !!!DEBUG ONLY

  { name: menu.name, columns: menu_columns({ t }) },
  { name: notice.name, columns: notice_columns({ t }) },
  { name: schema.name, columns: schema_columns({ t }) },
  { name: setting.name, columns: setting_columns({ t }) }
]
