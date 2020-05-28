import React, { useEffect, useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import EvaIcon from "react-eva-icons"
import { useTheme } from "@material-ui/core/styles"
import { Collection } from "@/core/setting/collections"
import rxDb from "@/utils/database/rxConnect"
import Divider from "@material-ui/core/Divider"
import { DynamicRoute, LocalDataRoute, UserRoute } from "@/utils/routes"
import { useRouter } from "next/router"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Primary } from "@/core/auth/schema"
import { Trans, useTranslation } from "react-i18next"

interface State {
  username: string | "Guest"
}

export default function UserMenu() {
  const { t } = useTranslation()
  const theme = useTheme()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [state, setState] = useState<State>({
    username: "Guest"
  })

  useEffect(() => {
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        where: { name: Primary },
        callback: data =>
          data &&
          data[0] &&
          setState({
            ...state,
            username: data[0]["value"]
          })
      })
    })()
  }, [])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ({ route }: { route?: string }) => {
    setAnchorEl(null)
    if (!route) return
    router.push(DynamicRoute, route).then(_r => {})
  }

  const handleLogout = async () => {
    // update username in setting
    const collection = Collection.name
    const db = await rxDb()

    await db[collection].upsert({
      name: Primary,
      value: undefined,
      updated_at: Date.now()
    })

    handleClose({})
    location.reload()
  }

  return (
    // User Icon
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <EvaIcon
          name="person-outline"
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
        onClose={() => handleClose({})}
      >
        <MenuItem disabled>
          <Trans
            i18nKey="Signed as $username"
            values={{ name: state.username && state.username.substr(0, 20) }}
          />
        </MenuItem>
        <MenuItem onClick={() => handleClose({})}>{t("Profile")}</MenuItem>
        <Divider />
        <MenuItem onClick={() => handleClose({ route: LocalDataRoute.auth })}>
          {t("Switch account")}
        </MenuItem>
        <MenuItem onClick={() => handleClose({ route: UserRoute.signIn })}>
          {t("Add another account")}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>{t("Logout")}</MenuItem>
      </Menu>
    </div>
  )
}
