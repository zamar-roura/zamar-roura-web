import React from 'react';
import styles from './NavItemComponent.module.scss';
import ReactGA from "react-ga4";
ReactGA.initialize([
    {
        trackingId: "G-Z2BVY8Y6H2",
    }
    ]);
function analyticsEvent(name,href){

    ReactGA.event({
        category: 'Navigation',
        action: "Button "+name,
        label: href, 
        nonInteraction: true
      });
}
const NavItemComponent = (props) => (

    <a href={props.to} onClick={() => analyticsEvent(props.name,props.to)} className={[styles.btn, styles.btnstripe].join(" ")}>{props.name}</a>
);

NavItemComponent.propTypes = {};

NavItemComponent.defaultProps = {};

export default NavItemComponent;
