/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, isLogin } = useAuth();
  const protectedRoute = ['/admin', '/profile', '/service'];

  const isProtected = protectedRoute.some((route) => route.includes(pathname));

  // protect login
  if (isProtected && !isLogin) {
    return <Navigate to='/login' />;
  }

  if (pathname === '/login' && isLogin) {
    return <Navigate to='/' />;
  }

  if (pathname === '/register' && isLogin) {
    return <Navigate to='/' />;
  }

  if (pathname.startsWith('/admin') && user.role === 'customer') {
    return <Navigate to='/profile' />;
  }

  if (pathname.startsWith('/profile') && user.role === 'admin') {
    return <Navigate to='/admin' />;
  }

  return children;
};

export default ProtectedRoute;
