import Head from "next/head"
import React from "react"
import { ENV } from "@/utils/config"

export default function DefaultHead() {
  return (
    <Head>
      <title>{ENV.SITE_NAME}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
