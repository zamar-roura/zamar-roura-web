import React from 'react';
import styles from './GoBackComponent.module.css';
import Link from 'next/link'

const GoBackComponent = () => {
    return (
        <div className={styles.absolute}>
            <Link href={"/"}><a className={styles.GoBackComponent}>Go back to zamar-roura.com</a></Link>
        </div>)
};

GoBackComponent.propTypes = {};

GoBackComponent.defaultProps = {};

export default GoBackComponent;
