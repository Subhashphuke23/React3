import React from 'react';

const Home = ({ user, accessToken }) => {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>Access Token: {accessToken}</p>
      <p>This is the Home Page</p>
    </div>
  );
};

export default Home;
