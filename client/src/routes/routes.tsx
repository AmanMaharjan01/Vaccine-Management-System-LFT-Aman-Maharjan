import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const ExamplePage = React.lazy(async () => import('pages/@example/ExamplePage'));

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <SuspenseComponent>
          <ExamplePage />
        </SuspenseComponent>
      ),
    },
  ]);
}

function SuspenseComponent({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
}
