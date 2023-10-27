import * as React from 'react';
import AuthContext, { useAuth } from '../contexts/auth';
import AppRoutes from './app';
import AuthRoutes from './auth';


function Router() {
  const { signed, loading } = useAuth();
  if (loading)
    return <Loader />
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Router;