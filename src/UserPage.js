import React, { useState, useEffect } from 'react';

function UserPage(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from API and update state
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Your email address is {user.email}.</p>
      <p>Your account was created on {new Date(user.createdOn).toLocaleDateString()}.</p>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;