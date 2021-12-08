import React, { lazy, Suspense } from 'react';

const LazyCVComponent = lazy(() => import('./CVComponent'));

const CVComponent = props => (
  <Suspense fallback={null}>
    <LazyCVComponent {...props} />
  </Suspense>
);

export default CVComponent;
