import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"

import { EditComponentProps } from "material-table"
import { Type } from "../../types"

import dynamic from "next/dynamic"

// @ts-ignore
import JSONInput from "react-json-editor-ajrm"
// @ts-ignore
import locale from "react-json-editor-ajrm/locale/en"

import { DialogTitle } from "./DialogTitle"
import { useTheme } from "@material-ui/core/styles"
import jsonViewStyles from "@/utils/styles/jsonViewStyles"

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false })

export default function EditColumns(props: EditComponentProps<Type>) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState("tree")
  const jsonData = props.value
    ? JSON.parse(props.value)
    : [{ title: "Id", field: "id" }]

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleJson = (data: any) => {
    props.onChange(JSON.stringify(data.updated_src))
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        config
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        disableBackdropClick
      >
        <DialogTitle
          id="customized-dialog-title"
          onClick={handleClose}
          setMode={setMode}
        >
          Edit Columns
        </DialogTitle>
        <DialogContent>
          {mode === "tree" && (
            <DynamicReactJson
              src={jsonData}
              iconStyle="circle"
              collapseStringsAfterLength={20}
              onAdd={handleJson}
              onEdit={handleJson}
              onDelete={handleJson}
              style={jsonViewStyles({ theme })}
            />
          )}
          {mode === "code" && (
            <JSONInput
              theme="light_mitsuketa_tribute"
              placeholder={jsonData}
              locale={locale}
              onChange={(props: any) => {
                if (!props.jsObject) return
                handleJson({
                  updated_src: props.jsObject
                })
              }}
              style={{
                outerBox: { width: "100%" },
                container: { width: "100%", fontSize: 14 }
              }}
              colors={{
                background: "rgba(143, 155, 179, 0.3)",
                default: theme.palette.primary.light
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
