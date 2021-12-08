import React, { lazy, Suspense } from 'react';

const LazyProjectBoxComponent = lazy(() => import('./ProjectBoxComponent'));

const ProjectBoxComponent = props => (
  <Suspense fallback={null}>
    <LazyProjectBoxComponent {...props} />
  </Suspense>
);

export default ProjectBoxComponent;
