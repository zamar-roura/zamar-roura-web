import React from 'react';
import styles from './NavItemComponent.module.scss';
const NavItemComponent = (props) => (
    <a href={props.to} className={[styles.btn, styles.btnstripe].join(" ")}>{props.name}</a>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
