import React, { useState } from "react"
import RxDB from "rxdb"

import { useRouter } from "next/router"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import EvaIcon from "react-eva-icons"
import { useTheme } from "@material-ui/core/styles"
import ConfirmDialog from "@/components/CommonDialog/ConfirmDialog"
import Divider from "@material-ui/core/Divider"
import { settingMenus } from "@/utils/config/settingMenus"
import { DynamicRoute } from "@/utils/routes"
import { useTranslation } from "react-i18next"

export default function SettingMenu() {
  const { t } = useTranslation()
  const theme = useTheme()
  const router = useRouter()
  const { group: qGroup, name: qName } = router.query
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [modalState, setModalState] = useState({
    open: 0,
    title: "",
    msg: ""
  })

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ({ route }: { route: string }) => {
    setAnchorEl(null)
    if (!route) return
    router.push(DynamicRoute, route).then(_r => {})
  }

  const handleClearDb = () => {
    setAnchorEl(null)
    setModalState({
      title: "Delete Local Database",
      open: modalState.open + 1,
      msg: "Do want to delete the local database?"
    })
  }

  return (
    // Setting Icon
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <EvaIcon
          name="settings-outline"
          size="large"
          fill={theme.bunadmin.iconColor}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        {settingMenus({ theme }).map((item, index) => (
          <MenuItem
            key={index}
            selected={item.route === `/${qGroup}/${qName}`}
            onClick={() => handleClose({ route: item.route })}
          >
            {t(item.name)}
          </MenuItem>
        ))}
        {/* ClearDb */}
        <Divider />
        <MenuItem onClick={() => handleClearDb()}>
          {t("Reset Local Database")}
        </MenuItem>
      </Menu>
      {/* ConfirmDialog */}
      <ConfirmDialog
        openModal={modalState.open}
        title={modalState.title}
        msg={modalState.msg}
        doFunc={() => {
          RxDB.removeDatabase("bunadmin", "idb").then(_r => location.reload())
        }}
      />
    </div>
  )
}
