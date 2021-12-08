import React from 'react';
import styles from './CompanyCVComponent.module.css';

const CompanyCVComponent = (props) => (
  <div className={styles.CompanyCVComponent}>
    <h3>{props.company['business']} - [{props.company['date']}]</h3>
    <div className={styles.timeline}>
      <h4>{props.company['job']}</h4>
      <div className={styles.space}>
        <u>{props.company['product']}</u>
        <ul>
          {props.company['bulletPoints'].map(d => (<li> <div key={d} dangerouslySetInnerHTML={{ __html: d }}></div></li>))}
        </ul>
      </div>
    </div>
    <a href={props.company['website']} target="_blank" rel="noreferrer"> Visit the website of {props.company['business']} </a>
  </div>
);

CompanyCVComponent.propTypes = {};

CompanyCVComponent.defaultProps = {};

export default CompanyCVComponent;
