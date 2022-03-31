import React from 'react';
import styles from './HomeComponent.module.css';
import {pageview} from '../../functions/analytics';
import { useLocation } from 'react-router-dom';

const HomeComponent = () => {
  const location = useLocation();
  React.useEffect(pageview(location.pathname));
  return (
  <div className={styles.HomeComponent}>
      Hello There! 
      My name is <span className="primary-color">Zamar</span>.
      I'm a <b className="third-color">data engineer</b>, <span className="primary-color">software developer expert</span> and a dad jokes advocate.
      I thrive in the search of unexplored concepts of common day tasks.
  </div>
);}

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
