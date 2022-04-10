import React from 'react';
import NameComponent from '../components/NameComponent/NameComponent';
import BodyComponent from '../components/BodyComponent/BodyComponent';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';


const HomeComponent = () => (
  <div className='container'>
      <NameComponent></NameComponent>
      <NavBarComponent></NavBarComponent>
      <BodyComponent/>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
