import React from 'react';
import styles from './ProjectBoxComponent.module.css';

const ProjectBoxComponent = (props) => (
  <div className={styles.ProjectBoxComponent}>
    <a href={props.project.href}>
      <h4 className="noma">{props.project.title}</h4>
    </a>
    <span >{props.project.description}</span>
  </div>
);

ProjectBoxComponent.propTypes = {};

ProjectBoxComponent.defaultProps = {};

export default ProjectBoxComponent;
