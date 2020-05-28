import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles"
import React from "react"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import { Typography } from "@material-ui/core"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import FormatAlignLeftIcon from "@material-ui/icons/List"
import FormatAlignCenterIcon from "@material-ui/icons/Code"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  })

interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClick?: () => void
  setMode: (arg0: string) => void
}

export const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClick, setMode, ...other } = props
  const [alignment, setAlignment] = React.useState("left")

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClick ? (
        <ToggleButtonGroup
          size="small"
          exclusive
          aria-label="text alignment"
          value={alignment}
          onChange={handleAlignment}
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            onClick={() => setMode("tree")}
          >
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton
            value="center"
            aria-label="centered"
            onClick={() => setMode("code")}
          >
            <FormatAlignCenterIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      ) : null}
    </MuiDialogTitle>
  )
})
