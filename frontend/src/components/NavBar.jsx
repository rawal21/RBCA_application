import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const role = localStorage.getItem('role'); // Fetch role from localStorage

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/dashboard" className="navbar-brand">
          MyApp
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {role === 'admin' && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin Panel
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Add the Logout Button */}
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
