import React from 'react';
import NavBarComponent from '../NavBarComponent/NavBarComponent';
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => (
  <div className={styles.HeaderComponent}>
    <div className={styles.title}>ZAMAR ROURA</div>
    <div className={styles.subtitle +" secondary-color"}><p>What will my favourite hobby be this week</p></div>
    <NavBarComponent></NavBarComponent>
  </div>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
