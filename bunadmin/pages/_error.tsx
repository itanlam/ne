import React from "react"
import CommonError from "../src/components/CommonError"
import { ErrorProps } from "../src/components/CommonError/models/types"

function Error({ statusCode }: { statusCode: number }) {
  return <CommonError statusCode={statusCode} hasLayout={true} />
}

Error.getInitialProps = ({ res, err }: ErrorProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
