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
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NXXBDL6');
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
