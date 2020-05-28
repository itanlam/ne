import React, { createRef } from "react"
import CommonTable, { CommonTableHead } from "@/components/CommonTable"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"
import { useTheme } from "@material-ui/core/styles"

import { SchemaLabel, SchemaColumns } from "./plugin"
import dataCtrl from "./controllers/dataCtrl"
import { useTranslation } from "react-i18next"

export default function() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const tableRef = createRef()

  return (
    <>
      <CommonTableHead title={t(SchemaLabel)} />
      <CommonTable
        tableRef={tableRef}
        title={t(SchemaLabel)}
        columns={SchemaColumns({ t })}
        // style
        style={DefaultProps.style}
        // icons
        icons={tableIcons({ theme })}
        // options
        options={{
          ...DefaultProps.options,
          filtering: true
        }}
        // data
        data={async query => await dataCtrl(query)}
      />
    </>
  )
}
