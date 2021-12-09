import React from 'react';
import styles from './NavItemComponent.module.css';
import { NavLink } from 'react-router-dom';

const NavItemComponent = (props) => (
    <NavLink className={styles.NavItemComponent +(props.name !=="HOME" ? ' ' + styles.BorderLeft:'')} to={props.to}>
    <img src={props.src} width ="20px" alt={props.name + " icon"}></img>
    <div>{props.name}</div>
    </NavLink>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
