// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    isAuthenticated ? <Route element={<Element />} /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;
