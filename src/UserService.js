import axios from 'axios';

const USER_URL = 'http://localhost:8082/api/user/getAll'

class UserService{
    getAllUsers(){
        return axios.get(USER_URL)
    }

    getUser(email){
        return axios.get(`http://localhost:8082/api/user/get/${email}`)
    }
}

export default new UserService()