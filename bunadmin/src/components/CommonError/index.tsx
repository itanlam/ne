import React from "react"
import { Box, Button, Typography } from "@material-ui/core"
import DefaultLayout from "@/layouts/DefaultLayout"
import errorMessages from "./models/errorMessages"
import { ErrorMsg, ErrorProps } from "./models/types"
import { useRouter } from "next/router"

interface Props {
  statusCode: number
  hasLayout: boolean
  message?: string
  redirect?: string
}

function CommonError({ statusCode, hasLayout, message, redirect }: Props) {
  const router = useRouter()

  const msg = (msg: ErrorMsg) => {
    return (
      <Box p={2} fontWeight="fontWeightLight">
        <Typography variant="h5" color="initial" display="inline">
          {msg.title}
          {" - "}
        </Typography>
        <Typography variant="h5" color="error" display="inline">
          <small>Error {statusCode}</small>
        </Typography>
        <Box p={1} />
        {message || msg.message}
        <Box p={1} />
        <Button
          size="small"
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => router.push(redirect || "/")}
        >
          {redirect ? "Redirect" : "Take Me Home"}
        </Button>
      </Box>
    )
  }

  if (!hasLayout)
    return (
      <Box p={3}>
        {statusCode
          ? msg(errorMessages[statusCode])
          : "An error occurred on client"}
      </Box>
    )

  return (
    <DefaultLayout>
      <Box p={3}>
        {statusCode
          ? msg(errorMessages[statusCode])
          : "An error occurred on client"}
      </Box>
    </DefaultLayout>
  )
}

CommonError.getInitialProps = ({ res, err }: ErrorProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CommonError
