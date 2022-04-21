import '../styles/globals.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z2BVY8Y6H2" />

       <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          window.gtag('js', new Date());
          window.gtag('config', 'G-Z2BVY8Y6H2');
        `,
        }}
      />
   
       <link
         href="https://fonts.googleapis.com/css?family=Roboto+Mono"
         rel="stylesheet"
       />
       <link
         href="https://fonts.googleapis.com/css?family=Red+Hat+Mono"
         rel="stylesheet"
       />
      </Head>
      <Component {...pageProps} />
    </>)
}

export default MyApp
