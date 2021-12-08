import React from 'react';
import styles from './HomeComponent.module.css';
import {isMobile} from 'react-device-detect'
const HomeComponent = () => (
  <div className={styles.HomeComponent}>
      Hello There! 
      <p>My name is <span className="primary-color">Zamar</span>.</p>
      <p>I'm a <span className="primary-color">data engineer</span>, <span className="primary-color">software developer expert</span> and a dad jokes advocate.</p>
      <p>I thrive in the search of unexplored concepts of common day tasks.</p>
      <p>{isMobile ? '↘️' :'↖️' } Have  a little peak of what I do...</p>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
