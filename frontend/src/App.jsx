import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import Register from './components/Register';
import DashBoard from './components/DashBoard';
import AdminPage from '../pages/AdminPage';
import ModeratorPage from '../pages/ModeratorPage';
import UserPage from "../pages/UserPage";
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <Router>
  
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route for all authenticated users */}
        <Route path="/dashboard" element={<DashBoard />} />

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute requiredRoles={['Admin']} />}>
          <Route path="/Admin" element={<AdminPage />} />
        </Route>

        {/* Moderator Protected Routes (Admin and Moderator) */}
        <Route element={<ProtectedRoute requiredRoles={['Admin', 'Moderator']} />}>
          <Route path="/Moderator" element={<ModeratorPage />} />
        </Route>

        {/* User Protected Routes (Admin, Moderator, and User) */}
        <Route element={<ProtectedRoute requiredRoles={['Admin', 'Moderator', 'User']} />}>
          <Route path="/User" element={<UserPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
