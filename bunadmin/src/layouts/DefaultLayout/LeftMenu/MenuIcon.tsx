import React from "react"

import { MenuIcon as MenuIconName, MenuIconType } from "@/core/menu/types"
import EvaIcon from "react-eva-icons"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles"
import { Icon } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.bunadmin.iconColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
)

interface Props {
  name?: string
  icon: MenuIconName
  icon_type: MenuIconType
}

export default function MenuIcon({ name, icon, icon_type }: Props) {
  const theme = useTheme()
  const classes = useStyles()

  if (!icon || !icon_type) return <span>Icon</span>

  switch (icon_type) {
    case "eva":
      return (
        <EvaIcon name={icon} size="large" fill={theme.bunadmin.iconColor} />
      )
    case "material":
      return (
        <Icon fontSize="default" style={{ color: theme.bunadmin.iconColor }}>
          {icon}
        </Icon>
      )
    case "url":
      return (
        <Icon className={classes.root}>
          <img alt={name} width={18} height={18} src={icon} />
        </Icon>
      )
    default:
      return <span>Icon</span>
  }
}
