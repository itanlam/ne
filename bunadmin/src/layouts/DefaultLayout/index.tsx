import React from "react"
import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import Box from "@material-ui/core/Box"
import { useTheme } from "@material-ui/core/styles"
import { defaultLayoutStyles } from "./styles"
import DefaultHead from "@/components/DefaultHead"
import LeftMenu, { LeftMenuProps } from "./LeftMenu"
import TopBar from "./TopBar"
import { Container, Fade } from "@material-ui/core"

const useStyles = defaultLayoutStyles

interface DefaultLayoutProps {
  children?: any
  leftMenu?: LeftMenuProps
}

// ResponsiveDrawer
export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children, leftMenu } = props
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <DefaultHead />
      <TopBar menuClick={handleDrawerToggle} />
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          PaperProps={{
            elevation: 1
          }}
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          anchor={theme.direction === "rtl" ? "right" : "left"}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <LeftMenu {...leftMenu} />
        </Drawer>
      </nav>
      <Container className={classes.content}>
        <Fade in>
          <Box boxShadow={1} className={classes.contentBox}>
            {children}
          </Box>
        </Fade>
      </Container>
    </div>
  )
}
