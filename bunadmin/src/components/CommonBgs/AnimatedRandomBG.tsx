import React, { ReactElement, useEffect, useState } from "react"
import Head from "next/head"

function genSpan(len: number) {
  const indents = []
  for (let i = 0; i < len; i++) {
    indents.push(<span key={i} />)
  }
  return indents
}

interface BgsType {
  css: string
  html: ReactElement
}

const bgs: BgsType[] = [
  {
    css: "/assets/css/blurBg.css",
    html: <div className="blurBg">{genSpan(20)}</div>
  },
  {
    css: "/assets/css/circlesBg.css",
    html: (
      <div className="circlesBg">
        <ul className="circles">{genSpan(10)}</ul>
      </div>
    )
  }
]

function AnimatedRandomBG() {
  const [bg, setBg] = useState(bgs[0])

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * bgs.length)
    const bg = bgs[randomNum]
    setBg(bg)
  }, [])

  return (
    <>
      <Head>
        <title>Login</title>
        {<link rel="stylesheet" href={bg.css} />}
      </Head>
      {bg.html}
    </>
  )
}

export default AnimatedRandomBG
