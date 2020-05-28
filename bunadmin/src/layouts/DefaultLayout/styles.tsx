import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const drawerWidth = 240

export const defaultLayoutStyles = makeStyles((theme: Theme) => {
  const drawerTop = theme.spacing(8)
  return createStyles({
    root: {
      display: "flex",
      height: "-webkit-fill-available"
    },
    drawer: {
      whiteSpace: "nowrap",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerOpen: {
      width: drawerWidth,
      top: drawerTop,
      borderRight: "none",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      top: drawerTop,
      borderRight: "none",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    hide: {
      display: "none"
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      background: theme.bunadmin.contentBg,
      flexGrow: 1,
      padding: theme.spacing(4.5)
    },
    contentBox: {
      background: theme.bunadmin.contentBoxBg,
      marginTop: theme.spacing(8)
    },
    // table
    treeDataThHidden: {
      display: "none"
    }
  })
})
