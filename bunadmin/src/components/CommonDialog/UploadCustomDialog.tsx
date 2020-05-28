import React, { ChangeEventHandler, useEffect } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

interface Interface {
  openModal: number
  title?: string
  msg?: string
  onChange: ChangeEventHandler<any>
  accept?: string
}

export default function UploadConfirmDialog({
  openModal,
  title,
  msg,
  onChange,
  accept
}: Interface) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    if (openModal < 1) return
    setOpen(true)
  }, [openModal])

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    onChange(e)
    handleClose()
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>

          <input
            hidden
            accept={accept || "*"}
            id="icon-button-file"
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="icon-button-file">
            <Button color="primary" component="span">
              Agree
            </Button>
          </label>
        </DialogActions>
      </Dialog>
    </div>
  )
}
