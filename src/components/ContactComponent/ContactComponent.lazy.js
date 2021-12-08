import React, { lazy, Suspense } from 'react';

const LazyContactComponent = lazy(() => import('./ContactComponent'));

const ContactComponent = props => (
  <Suspense fallback={null}>
    <LazyContactComponent {...props} />
  </Suspense>
);

export default ContactComponent;
