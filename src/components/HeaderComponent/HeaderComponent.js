import React from 'react';
import img from '../../img/img1.jpg'; // with import
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => (
  <div className={styles.HeaderComponent}>
    <div className={styles.headerblock}> 
      <h1>ZAMAR ROURA</h1>
      <h2 className={styles.subtitle +" secondary-color"}>Software Developer</h2>
    </div>
  <div className={styles.imgframe}>
    <img src= {img} alt="Zamar"></img>
    </div>
    </div>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
