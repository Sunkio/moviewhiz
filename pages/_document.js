import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="MovieWhiz" key="title"/>
        <meta property="og:description" content="Let AI pick the perfect movie" key="description"/>
        <meta
          property="og:image"
          content="https://moviewhiz.xyz/moviewhiz-og.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
