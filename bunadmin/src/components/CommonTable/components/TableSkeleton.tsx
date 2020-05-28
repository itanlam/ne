import { Box, Typography } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import React from "react"

interface Props {
  title?: string
  msg?: string
}

export default function TableSkeleton({ title, msg }: Props) {
  return (
    <Box p={3}>
      {title ? (
        <Typography variant="overline" style={{ textTransform: "capitalize" }}>
          {title}
        </Typography>
      ) : (
        <Skeleton width={100} />
      )}
      {msg && <p>{msg}</p>}
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  )
}
