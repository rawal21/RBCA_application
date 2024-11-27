import React from 'react';
import Navbar from '../src/components/NavBar';

const AdminPage = () => {
  return (
    <><Navbar /><div>
      <h2>Admin Page</h2>
      <p>Welcome Admin! Only Admins can see this page.</p>
    </div></>
  );
};

export default AdminPage;
