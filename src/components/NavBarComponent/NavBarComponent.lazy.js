import React, { lazy, Suspense } from 'react';

const LazyNavBarComponent = lazy(() => import('./NavBarComponent'));

const NavBarComponent = props => (
  <Suspense fallback={null}>
    <LazyNavBarComponent {...props} />
  </Suspense>
);

export default NavBarComponent;
