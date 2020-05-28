import React, { useEffect } from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import { Type } from "@/core/menu/types"
import MenuIcon from "./MenuIcon"
import { useRouter } from "next/router"
import { DynamicRoute, DynamicDocRoute } from "@/utils/routes"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      padding: 0
    },
    nested: {
      paddingLeft: theme.spacing(5),
      transition: "padding-left 0.5s ease"
    },
    expandIcon: {
      color: theme.bunadmin.iconColor
    }
  })
)

interface Props {
  data: Type[]
}

export default function NestedList({ data }: Props): any {
  const { t } = useTranslation("plugins")
  const router = useRouter()
  let { group: qGroup, name: qName } = router.query
  const classes = useStyles()
  const [open, setOpen] = React.useState({} as { [key: string]: boolean })

  if (router.route === DynamicDocRoute) {
    qGroup = "doc/" + router.query.category
    qName = router.query.slug
  }

  useEffect(() => {
    // set default opened parent
    if (typeof qGroup !== "string") return
    const parent = qGroup.replace("doc/", "")
    handleOpen({ name: parent })
  }, [])

  const handleOpen = ({ name }: { name: string }) => {
    setOpen({
      ...open,
      [name]: !open[name]
    })
  }

  const handleClick = ({ name, slug }: { name: string; slug?: string }) => {
    if (slug !== undefined && slug !== "") {
      const isUrl = new RegExp("^http.*").test(slug)

      if (!isUrl) {
        if (router.route === DynamicDocRoute) {
          return router.push(DynamicDocRoute, slug).then(_r => {})
        }

        router.push(DynamicRoute, slug).then(_r => {})
      } else {
        router.push(slug).then(_r => {})
      }
    } else {
      handleOpen({ name })
    }
  }

  if (data.length === 0) return null

  return (
    <>
      {data
        .filter(item => item.parent === "")
        .map(item => {
          const { name, label, slug, icon, icon_type } = item
          return (
            <List key={name} component="nav" className={classes.root}>
              <ListItem
                button
                selected={slug === `/${qGroup}/${qName}`}
                onClick={() => handleClick({ name, slug })}
              >
                <ListItemIcon>
                  <MenuIcon name={name} icon={icon} icon_type={icon_type} />
                </ListItemIcon>
                <ListItemText primary={t(label || name)} />
                {/* Expand Icon */}
                {data.filter(item => item.parent === name).length > 0 &&
                  (open[name] ? (
                    <ExpandLess
                      fontSize="small"
                      className={classes.expandIcon}
                    />
                  ) : (
                    <ExpandMore
                      fontSize="small"
                      className={classes.expandIcon}
                    />
                  ))}
              </ListItem>
              {/* Collapse */}
              <Collapse in={open[name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* Submenus */}
                  {data
                    .filter(item => item.parent === name)
                    .map(item => {
                      const { name, label, slug } = item
                      return (
                        <ListItem
                          key={name}
                          button
                          className={classes.nested}
                          selected={slug === `/${qGroup}/${qName}`}
                          onClick={() => handleClick({ name, slug })}
                        >
                          <ListItemText primary={t(label || name)} />
                        </ListItem>
                      )
                    })}
                </List>
              </Collapse>
            </List>
          )
        })}
    </>
  )
}
