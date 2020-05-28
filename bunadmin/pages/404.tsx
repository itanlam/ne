import CommonError from "@/components/CommonError"
import React from "react"

export default function() {
  return <CommonError statusCode={404} hasLayout={false} />
}
