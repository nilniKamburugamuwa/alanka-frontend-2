import axios from 'axios';

const USER_URL = 'http://localhost:8082/api/user/getAll'

class UserService{
    getAllUsers(){
        return axios.get(USER_URL)
    }
}

export default new UserService()