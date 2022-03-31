import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItemComponent.module.scss';
const NavItemComponent = (props) => (
    <NavLink to={props.to} className={styles.NavItemComponent}>
        <a href="#" className={[styles.btn, styles.btnstripe].join(" ")}>{props.name}</a>
    </NavLink>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
