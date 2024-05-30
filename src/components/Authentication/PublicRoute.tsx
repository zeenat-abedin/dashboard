import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsAuthenticated } from '../../utils/auth';

const PublicRoute: FC = () => {
  return !getIsAuthenticated() ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;