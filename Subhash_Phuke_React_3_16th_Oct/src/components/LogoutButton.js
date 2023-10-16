

// LogoutButton.js
import React from 'react';
import { useUser } from './context/UserContext';

const LogoutButton = () => {
  const { logout } = useUser();

  const handleLogout = () => {
    // Perform logout logic
    logout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;




