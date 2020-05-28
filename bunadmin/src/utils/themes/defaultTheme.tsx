import { createMuiTheme } from "@material-ui/core/styles"
import red from "@material-ui/core/colors/red"

const iconColor = "#8f9bb3"
const contentBg = "#EDF1F7"
const contentBoxBg = "#FFF"
const jsonViewBg = "rgba(143, 155, 179, 0.3)"
const bodyBg = contentBg

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    // add eva icon fill default value
    bunadmin: {
      iconColor: string
      contentBg: string
      contentBoxBg: string
      jsonViewBg: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    bunadmin?: {
      iconColor?: string
      contentBg?: string
      contentBoxBg?: string
      jsonViewBg?: string
    }
  }
}

// Create a defaultTheme instance.
const defaultTheme = createMuiTheme({
  bunadmin: {
    iconColor,
    contentBg,
    contentBoxBg,
    jsonViewBg
  },
  palette: {
    primary: {
      main: "#36f"
    },
    secondary: {
      main: "#00d68f"
    },
    error: {
      main: red.A400
    },
    background: {
      default: bodyBg
    }
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    body1: {
      fontSize: ".8125rem",
      fontWeight: 600,
      letterSpacing: 0.8
    }
  },
  overrides: {
    // component name
    MuiMenuItem: {
      root: {
        letterSpacing: 0.8
      }
    },
    MuiListItemIcon: {
      root: {
        color: iconColor,
        minWidth: 35
      }
    },
    MuiButton: {
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#598bff"
        }
      }
    },
    // cssBaseLine
    MuiCssBaseline: {
      // @ts-ignore
      "@global": {
        // body
        background: {
          default: bodyBg
        },
        img: {
          width: "100%"
        },
        // scrollbar start
        "*::-webkit-scrollbar": {
          width: ".4rem"
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#e4e9f2",
          cursor: "pointer",
          borderRadius: ".15625rem"
        }, // scrollbar end
        // eva icon
        ".eva-hover": {
          display: "inherit"
        },
        // MuiTable icon
        ".MuiTable-root .MuiIconButton-root": {
          color: iconColor
        },
        ".MuiTable-root .MuiIconButton-root.Mui-disabled": {
          opacity: 0.5
        },
        // left menu
        "[class*=drawerClose] nav .MuiListItem-root .MuiListItemText-root span": {
          height: 0,
          display: "inline-block",
          overflow: "hidden"
        }, // root
        "[class*=drawerClose] nav .MuiCollapse-container .MuiListItem-root .MuiListItemText-root span": {
          overflow: "visible",
          whiteSpace: "nowrap",
          transform: "translateX(0)",
          transition: "1s",
          minWidth: 50
        }, // text only
        "[class*=drawerClose] nav .MuiCollapse-container .MuiListItem-root .MuiListItemText-root span:hover": {
          transform: "translateX(calc(50px - 100%))"
        }, // text only
        "[class*=drawerClose] nav .MuiCollapse-container .MuiListItem-root": {
          paddingLeft: 20,
          transition: "padding-left 0.5s ease"
        }, // child
        "[class*=drawerClose] nav .MuiCollapse-container .MuiListItem-root .MuiListItemIcon-root+.MuiListItemText-root span": {
          overflow: "hidden"
        } // text with icon
      }
    }
  }
})

defaultTheme.shadows[1] = "0 0.5rem 1rem 0 rgba(44,51,73,.1)"

export default defaultTheme
