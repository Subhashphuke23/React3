// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic (e.g., send data to a backend)
    // For simplicity, just call onLogin with the username for now
    const accessToken = generateRandomToken();
    onLogin(username, accessToken);
    onLogin(username);
  };

  const generateRandomToken = () => {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;


