import React, { lazy, Suspense } from 'react';

const LazySetCookiesComponent = lazy(() => import('./SetCookiesComponent'));

const SetCookiesComponent = props => (
  <Suspense fallback={null}>
    <LazySetCookiesComponent {...props} />
  </Suspense>
);

export default SetCookiesComponent;
