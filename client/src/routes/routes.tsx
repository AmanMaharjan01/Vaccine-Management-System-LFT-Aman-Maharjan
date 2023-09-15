import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Dashboard = React.lazy(async () => import('pages/dashboard'));
const Login = React.lazy(async () => import('pages/auth/login'));

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <SuspenseComponent>
          <Dashboard />
        </SuspenseComponent>
      ),
    },
    {
      path: '/login',
      element: (
        <SuspenseComponent>
          <Login />
        </SuspenseComponent>
      ),
    },
  ]);
}

function SuspenseComponent({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
}
