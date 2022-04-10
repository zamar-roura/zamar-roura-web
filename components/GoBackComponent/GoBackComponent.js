import React from 'react';
import styles from './GoBackComponent.module.css';

const GoBackComponent = () => {
    return (
    <div className={styles.absolute}>
     <a href="/" className={styles.GoBackComponent}>Go back to zamar-roura.com</a>
    </div>)
};

GoBackComponent.propTypes = {};

GoBackComponent.defaultProps = {};

export default GoBackComponent;
