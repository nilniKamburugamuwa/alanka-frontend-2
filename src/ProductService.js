import axios from 'axios';

const PRODUCT_URL = 'http://localhost:8082/api/product/getAll'

class ProductService{
    getAllProducts(){
        return axios.get(PRODUCT_URL)
    }
}

export default new ProductService()