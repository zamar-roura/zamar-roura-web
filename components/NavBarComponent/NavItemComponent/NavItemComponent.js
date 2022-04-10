import React from 'react';
import styles from './NavItemComponent.module.scss';
import Link from 'next/link'
const NavItemComponent = (props) => (
    <Link href={props.to}>
        <span className={[styles.btn, styles.btnstripe].join(" ")}>
            {props.name}
        </span>
    </Link>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
