import React from 'react';
import NameComponent from '../components/NameComponent/NameComponent';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import ProjectsComponent from '../components/ProjectsComponent/ProjectsComponent';
import Head from 'next/head'

const HomeComponent = () => (
  <div>
     <Head>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Zamar Roura Projects" />
      <meta
        name="twitter:description"
        content="Zamar Roura, Software Engineer in Spain"
      />
      <meta name="twitter:creator" content="@ZamaRroura" />
      <meta
        name="twitter:image"
        content="https://twitter.com/ZamarRoura/photo"
      />
      <meta property="og:title" content="Zamar Roura Projects" />
      <meta property="og:url" content="http://zamar-roura.com/" />
      <meta property="og:image" content="https://twitter.com/ZamarRoura/photo" />
      <meta
        property="og:description"
        content="Zamar Roura, current and discarded projects"
      />
      <meta property="og:site_name" content="Zamar Roura" />

      <meta name="theme-color" content="#ffffff" />
    </Head>
    <div className='container'>
        <NameComponent></NameComponent>
        <NavBarComponent></NavBarComponent>
        <ProjectsComponent/>
    </div>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
