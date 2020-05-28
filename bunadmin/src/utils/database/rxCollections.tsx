import { Collection as LeftMenCollection } from "@/core/menu/collections"
import { Collection as LocalNoticeCollection } from "@/core/notice/collections"
import { Collection as LocalSchemaCollection } from "@/core/schema/collections"
import { Collection as LocalAuthCollection } from "@/core/auth/collections"
import { Collection as LocalSettingCollection } from "@/core/setting/collections"

export const rxCollections = [
  LeftMenCollection,
  LocalNoticeCollection,
  LocalSchemaCollection,
  LocalAuthCollection,
  LocalSettingCollection
]
