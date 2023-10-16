// import React, { createContext, useState, useContext, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user has an access token
//     if (!user || !user.accessToken) {
//       // Redirect to signup page if no access token
//       window.location.href = '/SignupForm';
//     }
//   }, [user]);

//   const logout = () => {
//     // Clear user state on logout
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };
// export default SignupForm;

// UserContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user has an access token
//     if (!user || !user.accessToken) {
//       // Redirect to signup page if no access token
//       window.location.href = '/SignupForm';
//     }
//   }, [user]);

//   const logout = () => {
//     // Clear user state on logout
//     setUser(null);
//     // Clear access token (for illustration purposes)
//     // You might have a more sophisticated method to clear the token, like sending a request to the server
//     localStorage.removeItem('accessToken');
//     // Redirect to signup page after logout
//     window.location.href = '/SignupForm';
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };

// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

// ... (reducer and other logic)

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(/* ... */);

  const login = (user) => {
    // Perform login logic, e.g., set user data in the state
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    // Perform logout logic, e.g., clear user data from the state
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider value={{ ...state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };

