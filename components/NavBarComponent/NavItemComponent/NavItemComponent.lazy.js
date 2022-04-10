import React, { lazy, Suspense } from 'react';

const LazyNavItemComponent = lazy(() => import('./NavItemComponent'));

const NavItemComponent = props => (
  <Suspense fallback={null}>
    <LazyNavItemComponent {...props} />
  </Suspense>
);

export default NavItemComponent;
