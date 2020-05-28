import React, { useState } from "react"

import { useTheme } from "@material-ui/core/styles"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"

import CommonTable, { CommonTableHead } from "@/components/CommonTable"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Columns } from "./columns"
import { Schema } from "./schema"
import { Collection } from "./collections"
import { useTranslation } from "react-i18next"

export default function AuthInfoContainer() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const [data, setData] = useState([])

  React.useEffect(() => {
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        sort: { name: "asc" },
        callback: data => setData(data)
      })
    })()
  }, [])

  return (
    <>
      <>
        <CommonTableHead title={t(Schema.title)} />
        <CommonTable
          title={t(Schema.title)}
          columns={Columns({ t })}
          data={data}
          // style
          style={DefaultProps.style}
          // icons
          icons={tableIcons({ theme })}
          // options
          options={{ ...DefaultProps.options, selection: false }}
        />
      </>
    </>
  )
}
