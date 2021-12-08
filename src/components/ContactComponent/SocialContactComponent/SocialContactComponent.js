import React from 'react';
import styles from './SocialContactComponent.module.css';
import {isMobile} from 'react-device-detect'

const SocialContactComponent = (props) => (
  <a href={props.href} target="_blank" rel="noreferrer">
    <div className={styles.SocialContactComponent} >
        <props.svg style={{ height: (!isMobile?"150":"100"), overflow: "visible", margin: "auto" }} fill='white' stroke='black' />
        <div style={{ margin: "auto", textAlign: "center" }}> <i>{props.title}</i>
      </div>
    </div>
  </a>
);

SocialContactComponent.propTypes = {};

SocialContactComponent.defaultProps = {};

export default SocialContactComponent;
