import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; 
import "../App.css";
import Navbar from './NavBar';

const DashBoard = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login if no token exists
    return <Navigate to="/" />;
  }

  
  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.role?.toLowerCase(); 
  

  
  

  

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Welcome  !</h1>
        <p>You are logged in as a <strong>{userRole}</strong>.</p>

        <div className="mt-4">
          <h3>Navigate to your role-based pages:</h3>
          <ul>
            {/* Admin: Full Access */}
            {userRole === 'admin' && (
              <>
                <p>You have full access to the application.</p>
                <li>
                  <Link to="/Admin" className="btn btn-primary mb-2">
                    Go to Admin Page
                  </Link>
                </li>
                <li>
                  <Link to="/Moderator" className="btn btn-warning mb-2">
                    Go to Moderator Page
                  </Link>
                </li>
                <li>
                  <Link to="/User" className="btn btn-success">
                    Go to User Page
                  </Link>
                </li>
              </>
            )}

            {/* Moderator: Access to Moderator and User Pages */}
            {userRole === 'moderator' && (
              <>
                <p>You can access Moderator and User pages.</p>
                <li>
                  <Link to="/Moderator" className="btn btn-warning mb-2">
                    Go to Moderator Page
                  </Link>
                </li>
                <li>
                  <Link to="/User" className="btn btn-success">
                    Go to User Page
                  </Link>
                </li>
              </>
            )}

            {/* User: Access to User Page Only */}
            {userRole === 'user' && (
              <>
                <p>You have access to the User page only.</p>
                <li>
                  <Link to="/User" className="btn btn-success">
                    Go to User Page
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;




