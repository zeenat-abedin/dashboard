import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsAuthenticated } from '../../utils/auth';

const PrivateRoute: FC = () => {
  return getIsAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;