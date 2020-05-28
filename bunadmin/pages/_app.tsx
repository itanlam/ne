import React, { useEffect } from "react"
import { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import defaultTheme from "@/utils/themes/defaultTheme"
import CommonSnackbar from "@/components/CommonSnackbar"
import { SnackbarProvider } from "notistack"
import SnackMessage from "@/components/CommonSnackbar/Message"
import "@/utils/i18n"
import { useTranslation } from "react-i18next"
import { Collection as Schema } from "@/core/schema/collections"
import rxDb from "@/utils/database/rxConnect"
import { Type as SchemaType } from "@/core/schema/types"
import addResource from "@/utils/scripts/addResource"
import initData from "@/utils/scripts/initData"
import { Collection as Setting, SettingNames } from "@/core/setting/collections"

const App = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    ;(async () => {
      // Init Data
      await initData()

      // Load setting i18n_code
      const db = await rxDb()
      const setting = db[Setting.name]
      const resI18nCode = await setting
        .findOne({ name: { $eq: SettingNames.i18n_code } })
        .exec()
      if (resI18nCode) i18n.changeLanguage(resI18nCode.value).then()

      // Add i18n resource
      let pathObj: any
      db[Schema.name]
        .find()
        .exec()
        .then((schemas: []) => {
          schemas.map(({ team, group }: SchemaType) => {
            if (!pathObj) pathObj = {}
            // continue when plugin path added
            if (!pathObj[team + group]) {
              pathObj[team + group] = true
              addResource({ i18n, team, group })
            }
          })
        })

      const jssStyles = document.querySelector("#jss-server-side")
      if (jssStyles) {
        // @ts-ignore
        jssStyles.parentElement.removeChild(jssStyles)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* Snackbar / Notice */}
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          autoHideDuration={2000}
          content={(key, message) => (
            <SnackMessage id={key} message={message} />
          )}
        >
          <CommonSnackbar />
        </SnackbarProvider>
        {/* Core component */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
