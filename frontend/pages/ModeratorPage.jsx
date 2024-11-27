import React from 'react';
import Navbar from '../src/components/NavBar';

const ModeratorPage = () => {
  return (
    <><Navbar /><div>
      <h2>Moderator Page</h2>
      <p>Welcome Moderator! Only  Admin and  Moderators can see this page.</p>
    </div></>
  );
};

export default ModeratorPage;
