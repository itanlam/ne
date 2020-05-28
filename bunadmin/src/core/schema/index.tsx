import React, { useState } from "react"

import { useTheme } from "@material-ui/core/styles"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"

import CommonTable, { CommonTableHead } from "@/components/CommonTable"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Columns } from "./columns"
import { Schema } from "./schema"
import { editableController } from "./controllers/editableController"
import { Collection } from "./collections"
import ConfirmDialog from "@/components/CommonDialog/ConfirmDialog"
import rxDb from "@/utils/database/rxConnect"
import dynamic from "next/dynamic"
import jsonViewStyles from "@/utils/styles/jsonViewStyles"
import { Type } from "./types"
import { useTranslation } from "react-i18next"
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false })

export default function SchemaManagerContainer() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const [data, setData] = useState([])
  const [selData, setSelData] = useState<Type[]>()
  const [modalState, setModalState] = useState({
    open: 0,
    title: "",
    msg: ""
  })

  React.useEffect(() => {
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        sort: { id: "asc" },
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
          editable={editableController()}
          data={data}
          // style
          style={DefaultProps.style}
          // icons
          icons={tableIcons({ theme })}
          // options
          options={{ ...DefaultProps.options, filtering: true, grouping: true }}
          // actions
          actions={[
            {
              tooltip: "Remove All Selected Schemas",
              icon: "delete",
              onClick: (_evt, data) => {
                data = data as Type[]
                const msg = "Do you want to delete " + data.length + " rows ?"
                setModalState({
                  title: "Bulk delete",
                  open: modalState.open + 1,
                  msg
                })
                setSelData(data)
              }
            }
          ]}
          // detailPanel
          detailPanel={[
            {
              icon: "code",
              render: rowData => {
                if (!rowData.columns) {
                  return (
                    <div
                      style={{
                        color: "white",
                        backgroundColor: theme.bunadmin.iconColor,
                        padding: "10px 30px"
                      }}
                    >
                      {rowData.columns || "COLUMNS IS EMPTY"}
                    </div>
                  )
                } else {
                  const arr = JSON.parse(rowData.columns) || []
                  return (
                    <DynamicReactJson
                      src={arr}
                      theme="summerfruit:inverted"
                      iconStyle="circle"
                      collapseStringsAfterLength={20}
                      displayObjectSize={false}
                      displayDataTypes={false}
                      style={jsonViewStyles({ theme })}
                    />
                  )
                } // check columns
              } // render
            } // item
          ]}
        />
      </>
      {/* ConfirmDialog */}
      <ConfirmDialog
        openModal={modalState.open}
        title={modalState.title}
        msg={modalState.msg}
        doFunc={() => {
          // bulk delete
          if (selData && selData.length > 0) {
            // @ts-ignore
            selData.map(async item => {
              try {
                const db = await rxDb()

                const query = db[Collection.name]
                  .findOne()
                  .where("id")
                  .eq(item.id)

                await query.remove()
              } catch (e) {
                console.error(e)
              }
            })
          }
        }}
      />
    </>
  )
}
