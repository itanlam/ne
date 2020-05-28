import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    minWidth: 344
  },
  typography: {
    fontWeight: "bold"
  },
  actionRoot: {
    padding: "8px 8px 8px 16px",
    justifyContent: "space-between",
    color: "#FFF"
  },
  icons: {},
  expand: {
    padding: "8px 8px",
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  collapse: {
    padding: 16
  },
  checkIcon: {
    fontSize: 20,
    color: "#b3b3b3",
    paddingRight: 4
  },
  button: {
    padding: 0,
    textTransform: "none"
  }
}))
