// // src/components/Profile.js
// import React from 'react';
// import { useUser } from './context/UserContext';

// const Profile = () => {
//   const { user } = useUser();

//   return (
//     <div>
//       <h2>Profile</h2>
//       {user ? (
//         <div>
//           <p>Welcome, {user}!</p>
//           {/* Display user details here */}
//         </div>
//       ) : (
//         <p>Please log in to view your profile.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;


// Profile.js
import React, { useEffect } from 'react';
import { useUser } from './components/context/UserContext';

const Profile = () => {
  const { user } = useUser();

  useEffect(() => {
    // Redirect to signup if user doesn't have an access token
    if (!user || !user.accessToken) {
      window.location.href = '/components/SignupForm';
    }
  }, [user]);

  return (
    <div>
      <h2>Profile Page</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
};

export default Profile;
