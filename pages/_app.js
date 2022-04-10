import '../styles/globals.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Zamar Roura" />
        <meta
          name="twitter:deScription"
          content="Zamar Roura, Software Engineer in Spain."
        />
        <meta name="twitter:creator" content="@ZamaRroura" />
        <meta
          name="twitter:image"
          content="https://twitter.com/ZamarRoura/photo"
        />
        <meta property="og:title" content="Zamar Roura" />
        <meta property="og:url" content="http://zamar-roura.com/" />
        <meta property="og:image" content="https://twitter.com/ZamarRoura/photo" />
        <meta
          property="og:deScription"
          content="Zamar Roura, Software & Data Engineer in Spain, Dad jokes advocate"
        />
        <meta property="og:site_name" content="Zamar Roura" />

        <meta name="theme-color" content="#ffffff" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        /> */}
      {/* </Head> */}
      <Component {...pageProps} />
    </>)
}

export default MyApp
