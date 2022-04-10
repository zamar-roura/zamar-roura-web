import React, { lazy, Suspense } from 'react';

const LazyBodyComponent = lazy(() => import('./BodyComponent'));

const BodyComponent = props => (
  <Suspense fallback={null}>
    <LazyBodyComponent {...props} />
  </Suspense>
);

export default BodyComponent;
