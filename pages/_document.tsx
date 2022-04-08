import NextDocument,  { Html, Head, Main, NextScript } from "next/document";

import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Send+Flowers&display=swap" rel="stylesheet" />
        </Head>
        <body className="text-zinc-600 bg-repeat bg-site bg-stone-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document