import { Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      {/* <Head>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z2BVY8Y6H2"/>
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
       </Head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}