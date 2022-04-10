import React, { lazy, Suspense } from 'react';

const LazyBodyComponent = lazy(() => import('./GoBackComponent'));

const BodyComponent = props => (
  <Suspense fallback={null}>
    <LazyBodyComponent {...props} />
  </Suspense>
);

export default BodyComponent;
