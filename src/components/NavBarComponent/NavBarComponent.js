import React from 'react';
import styles from './NavBarComponent.module.css';
import home from '../../img/home.png'
import cv from '../../img/cv.png'
import projects from '../../img/projects.png'
import contact from '../../img/contact.png'
import NavItemComponent from '../NavItemComponent/NavItemComponent';
const NavBarComponent = () => (
  <div className={styles.NavBarComponent}>
      <NavItemComponent name="HOME" to ="/" src={home} className={styles.item}></NavItemComponent>
      <NavItemComponent name="CV" to ="/cv" src={cv} className={styles.item}></NavItemComponent>
      <NavItemComponent name="PROJECTS" to ="/projects" src={projects} className={styles.item}></NavItemComponent>
      <NavItemComponent name="CONTACT" to ="/contact"src={contact} className={styles.item}></NavItemComponent>
  </div>
);

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
