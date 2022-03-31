import React from 'react';
import styles from './NavBarComponent.module.css';
import NavItemComponent from './NavItemComponent/NavItemComponent';

const NavBarComponent = () => (
  <div className={styles.NavBarComponent}>
      <NavItemComponent to="" name="Projects"></NavItemComponent>
      <NavItemComponent to="https://github.com/zamar-roura" name="Github"></NavItemComponent>
      <NavItemComponent to="https://www.linkedin.com/in/zamarelahi/" name="Linkedin"></NavItemComponent>
      <NavItemComponent to="" name="Mail"></NavItemComponent>
      
    </div>
);

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
