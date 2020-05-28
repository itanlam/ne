import React, { useState } from "react"

import { MTableToolbar } from "material-table"
import { useTheme } from "@material-ui/core/styles"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"

import CommonTable, { CommonTableHead } from "@/components/CommonTable"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import { Columns } from "./columns"
import { Schema } from "./schema"
import { Data } from "./data"
import EvaIcon from "react-eva-icons"
import rxDb from "@/utils/database/rxConnect"
import IconButton from "@material-ui/core/IconButton"
import { fsDownload } from "@/utils/scripts/fs"
import { Type } from "./types"
// @ts-ignore
import JSONInput from "react-json-editor-ajrm"
// @ts-ignore
import locale from "react-json-editor-ajrm/locale/en"
import MigrationDialogs from "./components/Dialog"
import { useTranslation } from "react-i18next"

export default function MigrationContainer() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const color: string = theme.bunadmin.iconColor
  const [selData, setSelData] = useState({
    name: "schema",
    mode: "Export"
  })
  const [modalState, setModalState] = useState({
    open: 0,
    title: "",
    msg: ""
  })
  const [uploadModal, setUploadModal] = useState({
    open: 0,
    title: "",
    msg: ""
  })

  return (
    <>
      <>
        <CommonTableHead title={t(Schema.title)} />
        <CommonTable
          title={t(Schema.title)}
          columns={Columns({ t })}
          data={Data({ t }) as any}
          // style
          style={DefaultProps.style}
          // icons
          icons={tableIcons({ theme })}
          // options
          options={{ ...DefaultProps.options, selection: false }}
          // actions
          actions={[
            {
              tooltip: "Export",
              icon: () => (
                <EvaIcon name="download-outline" size="large" fill={color} />
              ),
              onClick: async (_evt, data: Type[] | Type) => {
                if (!("name" in data)) return
                const db = await rxDb()
                const collection = data.name
                db[collection]
                  .dump()
                  .then((json: any) =>
                    fsDownload(json, collection, "application/json")
                  )
              }
            },
            {
              tooltip: "Import",
              icon: () => (
                <EvaIcon name="upload-outline" size="large" fill={color} />
              ),
              onClick: async (_evt, data: Type[] | Type) => {
                if (!("name" in data)) return
                const msg = `Do you want to restore ${data.name}?`
                setUploadModal({
                  title: "Import / Restore",
                  open: uploadModal.open + 1,
                  msg
                })
                setSelData({
                  name: data.name,
                  mode: "Export DB"
                })
              }
            }
          ]}
          components={{
            Toolbar: props => (
              <div>
                <MTableToolbar {...props} />
                <div style={{ padding: "0px 10px" }}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => {
                      const msg = "Do you want to backup Local Database?"
                      setModalState({
                        title: "Clone / Backup",
                        open: modalState.open + 1,
                        msg
                      })
                      setSelData({
                        name: "Database",
                        mode: "Export DB"
                      })
                    }}
                    color="inherit"
                  >
                    <EvaIcon
                      name="save-outline"
                      size="large"
                      fill={theme.bunadmin.iconColor}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => {
                      const msg = "Do you want to overwrite Local Database?"
                      setUploadModal({
                        title: "Restore Local Database",
                        open: uploadModal.open + 1,
                        msg
                      })
                      setSelData({
                        name: "ALL",
                        mode: "Import DB"
                      })
                    }}
                    color="inherit"
                  >
                    <EvaIcon
                      name="edit-2-outline"
                      size="large"
                      fill={theme.bunadmin.iconColor}
                    />
                  </IconButton>
                </div>
              </div>
            )
          }}
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
                  const json = rowData.columns || {}
                  return (
                    <JSONInput
                      viewOnly
                      theme="light_mitsuketa_tribute"
                      placeholder={json}
                      locale={locale}
                      style={{
                        outerBox: { width: "100%" },
                        container: { width: "100%", fontSize: 14 }
                      }}
                      colors={{
                        background: theme.bunadmin.jsonViewBg,
                        default: theme.palette.primary.light
                      }}
                    />
                  )
                } // check columns
              } // render
            } // item
          ]}
        />
      </>
      <MigrationDialogs
        selData={selData}
        modalState={modalState}
        uploadModal={uploadModal}
      />
    </>
  )
}
