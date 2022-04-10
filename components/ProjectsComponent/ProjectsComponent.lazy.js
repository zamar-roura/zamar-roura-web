import React, { lazy, Suspense } from 'react';

const LazyProjectsComponent = lazy(() => import('./ProjectsComponent'));

const ProjectsComponent = props => (
  <Suspense fallback={null}>
    <LazyProjectsComponent {...props} />
  </Suspense>
);

export default ProjectsComponent;
