import React, { lazy, Suspense } from 'react';

const LazyFirstPartySetComponent = lazy(() => import('./FirstPartySetComponent'));

const FirstPartySetComponent = props => (
  <Suspense fallback={null}>
    <LazyFirstPartySetComponent {...props} />
  </Suspense>
);

export default FirstPartySetComponent;
