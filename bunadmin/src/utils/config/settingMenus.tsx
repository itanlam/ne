import React from "react"
import EvaIcon, { EvaIconProps } from "react-eva-icons"
import { LocalDataRoute } from "../routes"
import { Theme } from "@material-ui/core/styles"

interface Param {
  theme: Theme
}

interface Res {
  name: string
  route: string
  icon: React.ReactElement<EvaIconProps>
}

export const settingMenus = ({ theme }: Param) =>
  [
    {
      name: "Menu Setting",
      route: LocalDataRoute.leftMenu,
      icon: (
        <EvaIcon
          name="link-outline"
          size="large"
          fill={theme.bunadmin.iconColor}
        />
      )
    },
    {
      name: "Schema Manager",
      route: LocalDataRoute.schema,
      icon: (
        <EvaIcon
          name="layers-outline"
          size="large"
          fill={theme.bunadmin.iconColor}
        />
      )
    },
    {
      name: "Data Migration",
      route: LocalDataRoute.migration,
      icon: (
        <EvaIcon
          name="sync-outline"
          size="large"
          fill={theme.bunadmin.iconColor}
        />
      )
    }
  ] as Res[]
