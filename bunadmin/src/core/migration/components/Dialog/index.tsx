import React from "react"
import ConfirmDialog from "@/components/CommonDialog/ConfirmDialog"
import rxDb from "@/utils/database/rxConnect"
import { fsDownload, fsUpload } from "@/utils/scripts/fs"
import UploadConfirmDialog from "@/components/CommonDialog/UploadCustomDialog"
import { notice } from "@/core"

interface Interface {
  selData: {
    name: string
    mode: string
  }
  modalState: {
    open: number
    title: string
    msg: string
  }
  uploadModal: {
    open: number
    title: string
    msg: string
  }
}

export default function MigrationDialogs({
  selData,
  modalState,
  uploadModal
}: Interface) {
  return (
    <>
      {/* ConfirmDialog */}
      <ConfirmDialog
        openModal={modalState.open}
        title={modalState.title}
        msg={modalState.msg}
        doFunc={async () => {
          const db = await rxDb()
          switch (selData.mode) {
            case "Export DB":
              db.dump().then((json: any) =>
                fsDownload(json, "bunadmin.json", "application/json")
              )
              break
            case "Import DB":
              // db.dump().then((json: any) => console.dir(json))
              break
            default:
              console.error("Missing method")
          }
        }}
      />
      {/* UploadConfirmDialog */}
      <UploadConfirmDialog
        title={uploadModal.title}
        msg={uploadModal.msg}
        accept="application/json"
        openModal={uploadModal.open}
        onChange={async e => {
          try {
            const json = await fsUpload(e)
            const db = await rxDb()
            // dump collection
            if (selData.name !== "ALL") {
              db[selData.name].importDump(json).then(() => {
                // show notice
                notice({ title: `Import successful` })
              })
            } else {
              // dump database
              db.importDump(json).then(() => {
                // show notice
                notice({ title: `Import successful` })
              })
            }
          } catch (e) {
            // show notice
            await notice({
              title: `Import failed`,
              severity: "error",
              content: e.toString()
            })
          }
        }}
      />
    </>
  )
}
