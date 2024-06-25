/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();

  if (!user || !user.isAdmin) {
    return <Navigate to='/login' />;
  }

  return element;
};

export default PrivateRoute;
