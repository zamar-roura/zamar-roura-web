import React from 'react';
import styles from './ProjectBoxComponent.module.css';

const ProjectBoxComponent = (props) => (
  <a href={props.project.href} target="_blank" rel="noreferrer">
    <div className={styles.ProjectBoxComponent}>
      <h4 className="noma">{props.project.title}</h4>
      <br></br>
        <span >{props.project.description}</span>
    </div>
  </a>
);

ProjectBoxComponent.propTypes = {};

ProjectBoxComponent.defaultProps = {};

export default ProjectBoxComponent;
