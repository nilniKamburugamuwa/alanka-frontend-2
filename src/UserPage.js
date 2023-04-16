import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetCurrentUser } from './GetCurrentUser';

function UserPage() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(GetCurrentUser());
        const token = localStorage.getItem('user');
        const response = await axios.get('http://localhost:8082/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
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
          <p>Welcome, {user.firstName}!</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default UserPage;
