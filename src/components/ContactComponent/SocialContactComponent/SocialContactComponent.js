import React from 'react';
import styles from './SocialContactComponent.module.css';

const SocialContactComponent = (props) => (
  <a href={props.href} target="_blank" rel="noreferrer">
    <div className={styles.SocialContactComponent} >
        <props.svg style={{ height: "150", overflow: "visible", margin: "auto" }} fill='white' stroke='black' />
        <div style={{ margin: "auto", textAlign: "center" }}> {props.title}
      </div>
    </div>
  </a>
);

SocialContactComponent.propTypes = {};

SocialContactComponent.defaultProps = {};

export default SocialContactComponent;
