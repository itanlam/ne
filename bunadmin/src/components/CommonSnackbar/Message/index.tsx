import React, { useState } from "react"
import PropTypes from "prop-types"
import { SnackbarKey, SnackbarMessage, useSnackbar } from "notistack"
import Collapse from "@material-ui/core/Collapse"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import CheckCircleIcon from "@material-ui/icons/OpenInNew"
import { useStyles } from "./styles"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Collection } from "@/core/notice/collections"
import { SeverityType } from "@/core/notice/types"
import { useTheme } from "@material-ui/core/styles"
import { LocalDataRoute } from "@/utils/routes"
import { useRouter } from "next/router"

interface State {
  severity: SeverityType | "none"
  content: string | null
}

const SnackMessage = React.forwardRef(
  (props: { id: SnackbarKey; message: SnackbarMessage }, ref) => {
    const router = useRouter()
    const theme = useTheme()
    const classes = useStyles()
    const { closeSnackbar } = useSnackbar()
    const [expanded, setExpanded] = useState(false)
    const [state, setState] = useState({
      severity: "none",
      content: null
    } as State)

    const colors = {
      none: null,
      success: `linear-gradient(45deg, ${theme.palette.success.light} 30%, rgba(200, 200, 200, 0.88) 125%)`,
      error: `linear-gradient(45deg, ${theme.palette.error.light} 30%, rgba(200, 200, 200, 0.88) 125%)`,
      warning: `linear-gradient(45deg, ${theme.palette.warning.light} 30%, rgba(200, 200, 200, 0.88) 125%)`,
      info: `linear-gradient(45deg, ${theme.palette.info.light} 30%, rgba(200, 200, 200, 0.88) 125%)`
    }

    React.useEffect(() => {
      ;(async () => {
        await rxSubscribe({
          collection: Collection.name,
          sort: { created_at: "desc" },
          callback: data => {
            const item = data[0]

            if (!item) return
            setState({ severity: item.severity, content: item.content })
          }
        })
      })()
    }, [])

    const handleExpandClick = () => {
      setExpanded(!expanded)
    }

    const handleDismiss = () => {
      closeSnackbar(props.id)
    }

    return (
      <Card
        style={
          state.severity !== "none"
            ? {
                background: colors[state.severity],
                transition: "width .2s ease-in-out"
              }
            : {
                background: "#FFF",
                transition: "width .2s ease-in-out"
                // theme.bunadmin.iconColor // theme.palette.primary.light
              }
        }
        className={classes.card}
        ref={ref}
      >
        <CardActions classes={{ root: classes.actionRoot }}>
          <Typography variant="subtitle2" className={classes.typography}>
            {props.message}
          </Typography>
          <div className={classes.icons}>
            {state.content && (
              <IconButton
                aria-label="Show more"
                color="inherit"
                className={
                  expanded
                    ? `${classes.expand} ${classes.expandOpen}`
                    : classes.expand
                }
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            )}
            <IconButton
              color="inherit"
              className={classes.expand}
              onClick={handleDismiss}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          addEndListener={undefined}
        >
          <Paper className={classes.collapse}>
            <Typography gutterBottom>{state.content}</Typography>
            <Button
              size="small"
              className={classes.button}
              onClick={() => router.push(LocalDataRoute.notice).then(_r => {})}
            >
              <CheckCircleIcon className={classes.checkIcon} />
              Open List
            </Button>
          </Paper>
        </Collapse>
      </Card>
    )
  }
)

SnackMessage.propTypes = {
  id: PropTypes.number.isRequired
}

export default SnackMessage
