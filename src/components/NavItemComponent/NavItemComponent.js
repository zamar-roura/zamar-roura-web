import React from 'react';
import styles from './NavItemComponent.module.css';
import { NavLink } from 'react-router-dom';
const NavItemComponent = (props) => (
  <div className={styles.NavItemComponent}>
    <img src={props.src} alt={props.name + " icon"}></img>
    <NavLink to={props.to}>{props.name}</NavLink>
    
  </div>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
