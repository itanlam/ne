import React, { useEffect, useState } from "react"

import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import EvaIcon from "react-eva-icons"
import { useTheme } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { i18nMenus } from "@/utils/i18n"
import rxDb from "@/utils/database/rxConnect"
import { Collection as Setting, SettingNames } from "@/core/setting/collections"

export default function I18nMenu() {
  const { i18n } = useTranslation()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [curCode, setCurCode] = useState<string>()

  useEffect(() => {
    ;(async () => {
      const db = await rxDb()
      const setting = db[Setting.name]
      const resI18nCode = await setting
        .findOne({ name: { $eq: SettingNames.i18n_code } })
        .exec()
      if (resI18nCode) setCurCode(resI18nCode.value)
    })()
  }, [])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleI18n = ({ code }: { code: string }) => {
    i18n.changeLanguage(code).then(async () => {
      // update setting i18n_code
      const db = await rxDb()
      await db[Setting.name].upsert({
        name: SettingNames.i18n_code,
        value: code
      })
      setCurCode(code)
    })
    handleClose()
  }

  function handleClose() {
    setAnchorEl(null)
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
          name="globe-outline"
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
        {i18nMenus.map((item, index) => (
          <ListItem
            key={index}
            button
            onClick={() => handleI18n({ code: item.code })}
            selected={item.code === curCode}
          >
            <ListItemText color={"red"} primary={item.name} />
          </ListItem>
        ))}
      </Menu>
    </div>
  )
}
