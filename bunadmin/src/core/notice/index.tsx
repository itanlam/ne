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
import { Type } from "./types"
import { useTranslation } from "react-i18next"

export default function LocalNoticeContainer() {
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
        sort: { created_at: "desc" },
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
          options={{ ...DefaultProps.options, filtering: true }}
          // actions
          actions={[
            {
              tooltip: "Remove All Selected Notices",
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
          detailPanel={rowData => {
            return (
              <div
                style={{
                  color: "white",
                  backgroundColor: theme.bunadmin.iconColor,
                  padding: "10px 30px"
                }}
              >
                {rowData.content || "CONTENT IS EMPTY"}
              </div>
            )
          }}
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
