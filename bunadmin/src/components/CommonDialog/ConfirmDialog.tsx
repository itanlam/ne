import React, { ReactElement, useEffect } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { Translation } from "react-i18next"

interface Interface {
  openModal: number
  title?: string | ReactElement
  msg?: string | ReactElement
  doFunc: () => void
  disagree?: string | ReactElement
  agree?: string | ReactElement
}

export default function ConfirmDialog({
  openModal,
  title,
  msg,
  doFunc,
  disagree,
  agree
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

  const handleAgree = () => {
    doFunc()
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
            {disagree || <Translation>{t => t("Disagree")}</Translation>}
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            {agree || <Translation>{t => t("Agree")}</Translation>}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
