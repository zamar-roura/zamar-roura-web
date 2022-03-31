import React, { lazy, Suspense } from 'react';

const LazyDumpCookiesComponent = lazy(() => import('./DumpCookiesComponent'));

const DumpCookiesComponent = props => (
  <Suspense fallback={null}>
    <LazyDumpCookiesComponent {...props} />
  </Suspense>
);

export default DumpCookiesComponent;
