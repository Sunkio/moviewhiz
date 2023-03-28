import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum.scale=1.0, user-scalable=no" />
        <meta property="og:title" content="MovieWhiz" key="title"/>
        <meta property="og:description" content="Let AI pick the perfect movie for you - simply enter your prompt and press generate" key="description"/>
        <meta
          property="og:image"
          content="https://moviewhiz.xyz/moviewhiz-og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moviewhiz.xyz" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
