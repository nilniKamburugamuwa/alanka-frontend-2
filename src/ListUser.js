import React, { useEffect, useState } from 'react'
import UserService from './UserService'

const ListUser = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
        }).catch(error =>{
            console.log(error)
        })
    },[])

    return (
        <div className='listUser'>

            { users.map(user =>
                <div>
                    <h2>{user.firstName}</h2>
                    <p>{user.lastName}</p>
                </div>
            )
            }
            {/* <h2>User List</h2>
            <table className='listUser__table'>
                <thead>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Type</th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default ListUser

