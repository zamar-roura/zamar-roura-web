import React from 'react';
import NameComponent from '../components/NameComponent/NameComponent';
import BodyComponent from '../components/BodyComponent/BodyComponent';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Head from 'next/head'

const HomeComponent = () => (
  <div>
    <Head>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Zamar Roura" />
      <meta
        name="twitter:description"
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
        property="og:description"
        content="Zamar Roura, Software & Data Engineer in Spain, Dad jokes advocate"
      />
      <meta property="og:site_name" content="Zamar Roura" />

      <meta name="theme-color" content="#ffffff" />
    </Head>

    <div className='container'>
      <NameComponent></NameComponent>
      <NavBarComponent></NavBarComponent>
      <BodyComponent />
    </div>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
