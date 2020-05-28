import React, { useEffect, useState } from "react"

import Divider from "@material-ui/core/Divider"
import NestedList from "./NestedMenu"
import SettingMenu from "./SettingMenu"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Collection } from "@/core/menu/collections"
import { Type } from "@/core/menu/types"
import { ENV } from "@/utils/config"

export interface LeftMenuProps {
  data?: Type[]
  offLeftSetting?: boolean
}

const LeftMenu = ({ data: propsData, offLeftSetting }: LeftMenuProps) => {
  const [data, setData] = useState(propsData || ([] as Type[]))

  useEffect(() => {
    if (propsData) return
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        sort: { rank: "desc" },
        callback: data => {
          setData(data)
        }
      })
    })()
  }, [propsData])

  return (
    <>
      <NestedList data={propsData || data} />
      <Divider />
      {!offLeftSetting && ENV.ON_SETTING && <SettingMenu />}
    </>
  )
}

export default LeftMenu
