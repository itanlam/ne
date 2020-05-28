import React from "react"
import { useRouter } from "next/router"
import LocalLeftMenuContainer from "@/core/menu"
import MigrationContainer from "@/core/migration"
import LocalNoticeContainer from "@/core/notice"
import SchemaManagerContainer from "@/core/schema"
import AuthInfoContainer from "@/core/auth"
import BunadminSettingContainer from "@/core/setting"

export default function CorePages() {
  const router = useRouter()
  const { name } = router.query

  let container = null

  switch (name) {
    case "left-menu":
      container = <LocalLeftMenuContainer />
      break
    case "migration":
      container = <MigrationContainer />
      break
    case "notice":
      container = <LocalNoticeContainer />
      break
    case "schema":
      container = <SchemaManagerContainer />
      break
    case "auth":
      container = <AuthInfoContainer />
      break
    case "setting":
      container = <BunadminSettingContainer />
  }

  return <>{container}</>
}
