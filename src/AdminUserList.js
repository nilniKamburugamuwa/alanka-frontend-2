import { useEffect, useState } from "react"
import UserService from "./UserService"
import "./AdminDashboard.css"
export default function AdminUserList() {
  
    const [users, setUsers] = useState([])
  
    useEffect(()=>{
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
        }).catch(error =>{
            console.log(error)
        })
    },[])
  
    return (
      <div className='userList'>
        <div className='tableContainer'>
        <div className='userTable'>
          <table>
            <thead>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Type</th>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className='td'>
                    {user.id}
                  </td>
                  <td className='td'>
                    {user.firstName}
                  </td>
                  <td className='td'>
                    {user.lastName}
                  </td>
                  <td className='td'>
                    {user.email}
                  </td>
                  <td className='td'>
                    {user.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }