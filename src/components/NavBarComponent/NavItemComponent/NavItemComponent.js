import React from 'react';
import styles from './NavItemComponent.module.css';
import { NavLink } from 'react-router-dom';
import {isMobile} from 'react-device-detect'

const NavItemComponent = (props) => (
  <div className={styles.NavItemComponent +(props.name !="HOME" ? ' ' + styles.BorderLeft:'')}>
    {!isMobile ? <img src={props.src} alt={props.name + " icon"}></img>:''}
    <NavLink to={props.to}>{props.name}</NavLink>
  </div>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
