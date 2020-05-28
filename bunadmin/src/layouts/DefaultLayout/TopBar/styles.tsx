import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const topBarStyles = makeStyles((theme: Theme) => {
  return createStyles({
    appBar: {
      [theme.breakpoints.up("sm")]: {
        zIndex: theme.zIndex.drawer + 1
      }
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    toolbar: {
      [theme.breakpoints.up("sm")]: {
        justifyContent: "space-between"
      }
    },
    leftBlock: {
      display: "flex",
      alignItems: "center"
    },
    rightBlock: {
      display: "flex",
      alignItems: "center"
    }
  })
})
