// ProtectedRoute.js
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Auth/authContext'; // Adjust the import path

const ProtectedRoute = ({ element }) => {
    const { authenticated } = useAuth();

    return(
        authenticated ? <Outlet/> : <Navigate to="/login"/>)

}
export default ProtectedRoute;
