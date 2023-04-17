import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetCurrentUser } from './GetCurrentUser';

function UserPage() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(GetCurrentUser());
        const token = JSON.parse(localStorage.getItem('user'));
        console.log(token.token)
        const response = await axios.get('http://localhost:8082/api/v1/auth/user', {
          headers: {
            Authorization: `Bearer ${token.token}$`
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Email: {JSON.stringify(user)}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default UserPage;
