import React, { lazy, Suspense } from 'react';

const LazySocialContactComponent = lazy(() => import('./SocialContactComponent'));

const SocialContactComponent = props => (
  <Suspense fallback={null}>
    <LazySocialContactComponent {...props} />
  </Suspense>
);

export default SocialContactComponent;
