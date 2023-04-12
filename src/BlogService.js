import axios from 'axios';

const BLOG_URL = 'http://localhost:8082/api/blog/getAll'
const URL = 'http://localhost:8082/api/blog/get'
class BlogService{
    getAllBlogs(){
        return axios.get(BLOG_URL)
    }

    getBlog({id}){
        return axios.get(URL+"/"+String(id))
    }
}


export default new BlogService()