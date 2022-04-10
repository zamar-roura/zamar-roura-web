import React from 'react';
import NameComponent from '../components/NameComponent/NameComponent';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import ProjectsComponent from '../components/ProjectsComponent/ProjectsComponent';


const HomeComponent = () => (
  <div className='container'>
      <NameComponent></NameComponent>
      <NavBarComponent></NavBarComponent>
      <ProjectsComponent/>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
