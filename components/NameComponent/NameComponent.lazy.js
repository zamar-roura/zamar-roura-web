import React, { lazy, Suspense } from 'react';

const LazyNameComponent = lazy(() => import('./NameComponent'));

const NameComponent = props => (
  <Suspense fallback={null}>
    <LazyNameComponent {...props} />
  </Suspense>
);

export default NameComponent;
