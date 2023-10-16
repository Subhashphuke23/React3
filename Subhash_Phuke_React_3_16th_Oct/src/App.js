// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
// import LogoutButton from './components/LogoutButton';
// import Profile from './components/Profile';
// import UserContext from './components/context/UserContext';

const App = () => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = (username, token) => {
    // For simplicity, set the user and access token directly
    setUser(username);
    setAccessToken(token);
  };

  const handleSignup = (username, token) => {
    // For simplicity, set the user and access token directly
    setUser(username);
    setAccessToken(token);
  };

  console.log('Access Token:', accessToken);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <SignupForm onSignup={handleSignup} />
        </Route>
        <PrivateRoute
          path="/home"
          component={() => <Home user={user} />}
          isAuthenticated={user !== null}
        />
        <Route path="/">
          <div>
            <h2>Home</h2>
            <p>Welcome to the Home Page</p>
          </div>
        </Route>
      </Switch>
    </Router>
    
  );
};

export default App;



