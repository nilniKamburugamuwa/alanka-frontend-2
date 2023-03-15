import axios from 'axios';

const BLOG_URL = 'http://localhost:8082/api/blog/getAll'

class BlogService{
    getAllBlogs(){
        return axios.get(BLOG_URL)
    }
}

export default new BlogService()