import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import MuiLink from "@material-ui/core/Link"
import ProTip from "../src/components/ProTip"
import DefaultLayout from "../src/layouts/DefaultLayout"
import { ENV } from "@/utils/config"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="#">
        {ENV.SITE_NAME}
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function Index() {
  return (
    <DefaultLayout>
      <Container maxWidth="sm">
        <Box p={3} my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to {ENV.SITE_NAME}
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </DefaultLayout>
  )
}
