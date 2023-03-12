import axios from 'axios';

const usersUrl = 'http://localhost:8082/api/users';

export const getAllUsers = async (id) => {
    id = id || '';
    try{
        return await axios.get(`${usersUrl}/${id}`);
    } catch(error){
        console.log('Error while calling getUsers api', error);
    }
}

export const addUser = async (user)=> {
    return await axios.post(`${usersUrl}`, user);
}

export const deleteUserById = async (id) => {
    return await axios.post.delete(`${usersUrl}/delete/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/edit/${id}`, user);
}