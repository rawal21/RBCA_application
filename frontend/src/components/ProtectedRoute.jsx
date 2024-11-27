import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"; 

const ProtectedRoute = ({ requiredRoles = [] }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />; // Redirect to login if no token exists
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    const currentTime = Date.now() / 1000;

    // Check if the token has expired
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('token'); 
      return <Navigate to="/" />; 
    }

    // Check if the user's role is included in the required roles
    if (!requiredRoles.includes(userRole)) {
      return <Navigate to="/dashboard" />; // Redirect to dashboard if role doesn't matech
    }

    // Allow access if the role matches
    return <Outlet />;
  } catch (error) {
    // If token is invalid or malformed, redirect to login
    localStorage.removeItem('token'); // Clear invalid token
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
