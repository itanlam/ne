import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { useRouter } from "next/router"
import EvaIcon from "react-eva-icons"
import { useTheme } from "@material-ui/core/styles"
import { DynamicRoute, LocalDataRoute } from "@/utils/routes"

export default function NoticeMenu() {
  const theme = useTheme()
  const router = useRouter()
  const handleMenu = (_event: React.MouseEvent<HTMLElement>) => {
    router.push(DynamicRoute, LocalDataRoute.notice).then(_r => {})
  }

  return (
    // Notice Icon
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <EvaIcon
          name="bell-outline"
          size="large"
          fill={theme.bunadmin.iconColor}
        />
      </IconButton>
    </div>
  )
}
