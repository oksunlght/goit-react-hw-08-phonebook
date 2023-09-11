import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Navigation from './Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </>
  );
};

export default Layout;
