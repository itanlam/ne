import React, { useEffect, useState } from "react"

import CommonTable, { CommonTableHead } from "@/components/CommonTable"

import { Collection } from "./collections"
import { Schema } from "./schema"
import { Columns } from "./columns"

import { editableController } from "./controllers/editableController"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"
import rxSubscribe from "@/utils/database/rxSubscribe"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import { useTheme } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"

export default function LocalLeftMenuContainer() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        sort: { name: "desc" },
        callback: data => setData(data)
      })
    })()
  }, [])

  return (
    <>
      <CommonTableHead title={t(Schema.title)} />
      <CommonTable
        title={t(Schema.title)}
        columns={Columns({ t })}
        editable={editableController()}
        data={data}
        // style
        style={DefaultProps.style}
        // icons
        icons={tableIcons({ theme })}
        // options
        options={{ ...DefaultProps.options }}
      />
    </>
  )
}
