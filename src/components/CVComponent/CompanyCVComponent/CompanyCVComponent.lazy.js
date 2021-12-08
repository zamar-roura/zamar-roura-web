import React, { lazy, Suspense } from 'react';

const LazyCompanyCVComponent = lazy(() => import('./CompanyCVComponent'));

const CompanyCVComponent = props => (
  <Suspense fallback={null}>
    <LazyCompanyCVComponent {...props} />
  </Suspense>
);

export default CompanyCVComponent;
