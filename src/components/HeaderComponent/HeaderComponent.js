import React from 'react';
import styles from './HeaderComponent.module.scss';

const HeaderComponent = () => (
  <div className={styles.HeaderComponent + "noma" +"nopa"}>
    ZAMAR ROURA
    <div className="secondary-color small-font"><p>What will my favourite hobby be this week</p></div>
  </div>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
