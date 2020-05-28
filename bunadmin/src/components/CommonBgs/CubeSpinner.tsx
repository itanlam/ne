import React from "react"
import Head from "next/head"

const css = "/assets/css/cubeSpinner.css"

function CubeSpinner() {
  return (
    <>
      <Head>
        <title>Loading...</title>
        <link rel="stylesheet" href={css} />
      </Head>
      <div id="main">
        <span className="spinner" />
      </div>
    </>
  )
}

export default CubeSpinner
