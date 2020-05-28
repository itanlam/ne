import React, { useEffect, useState } from "react"

import { useTheme } from "@material-ui/core/styles"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"

import CommonTable, { CommonTableHead } from "@/components/CommonTable"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Columns } from "./columns"
import { Primary, Schema } from "./schema"
import { Collection } from "./collections"
import { Collection as Setting } from "../setting/collections"
import ConfirmDialog from "@/components/CommonDialog/ConfirmDialog"
import rxDb from "@/utils/database/rxConnect"
import dynamic from "next/dynamic"
import jsonViewStyles from "@/utils/styles/jsonViewStyles"
import { Type } from "./types"
import { Box, Button } from "@material-ui/core"
import { useTranslation } from "react-i18next"
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false })

export default function AuthInfoContainer() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const [data, setData] = useState([])
  const [selData, setSelData] = useState<Type[]>()
  const [modalState, setModalState] = useState({
    open: 0,
    title: "",
    msg: ""
  })

  useEffect(() => {
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        sort: { updated_at: "desc" },
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
          options={{ ...DefaultProps.options, filtering: true, grouping: true }}
          // actions
          actions={[
            {
              tooltip: "Remove All Selected Items",
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
              icon: "assignment_ind",
              render: rowData => {
                if (!rowData.details) {
                  return (
                    <div
                      style={{
                        color: "white",
                        backgroundColor: theme.bunadmin.iconColor,
                        padding: "10px 30px"
                      }}
                    >
                      {rowData.details || "DETAILS IS EMPTY"}
                    </div>
                  )
                } else {
                  const str = rowData.details || ""
                  return (
                    <DynamicReactJson
                      src={JSON.parse(str)}
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
            }, // item
            {
              icon: "sync_alt",
              render: rowData => {
                return (
                  <Box p={3}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={async () => {
                        const db = await rxDb()
                        await db[Setting.name].upsert({
                          name: Primary,
                          value: rowData[Primary],
                          updated_at: Date.now()
                        })
                      }}
                    >
                      Switch to {rowData[Primary]}
                    </Button>
                  </Box>
                )
              }
            }
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
            selData.map(async item => {
              try {
                const db = await rxDb()

                const query = db[Collection.name]
                  .findOne()
                  .where(Primary)
                  .eq(item[Primary])

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
