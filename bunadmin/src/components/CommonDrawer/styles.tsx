import { makeStyles } from "@material-ui/styles"
import { createStyles, Theme } from "@material-ui/core"

interface Props {
  width?: number | string
  height?: number | string
}

export default function styles({ width, height }: Props) {
  const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      root: {
        display: "flex"
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1
      },
      drawer: {
        width,
        height,
        flexShrink: 0
      },
      drawerPaper: {
        width,
        height,
        padding: theme.spacing(3)
      },
      drawContent: {
        flexGrow: 1
      },
      toolbar: theme.mixins.toolbar
    })
  })

  return useStyles()
}
