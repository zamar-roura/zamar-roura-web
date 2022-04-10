import React from 'react';
import styles from './NameComponent.module.css';
import Image from 'next/image'
const NameComponent = () => (
  <div className={styles.NameComponent}>
    <div className={styles.headerblock}> 
      <h1>ZAMAR ROURA</h1>
      <h2 className={styles.subtitle +" secondary-color"}>Software Developer</h2>
    </div>
  <div className={styles.imgframe}>
    <Image layout='fill' src="/images/profile-photo.jpg" alt="Zamar"></Image>
    </div>
    </div>
);

NameComponent.propTypes = {};

NameComponent.defaultProps = {};

export default NameComponent;
