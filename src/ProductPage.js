import React from 'react'
import "./ProductPage.css"
import ProductSearchBar from './ProductSearchBar'
import Header from './Header'
import ProductReview from './ProductReview'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chip from './Chip';
import './Product.css';
import { Link } from 'react-router-dom';

import axios from 'axios';
import ProductService from './ProductService';

const ProductPage = () => {
  const [productList, setProductList] = useState([])
  useEffect(()=>{
    ProductService.getAllProducts().then((response) =>{
      setProductList(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[]) 
  const { id } = useParams();
  const [product, setProduct] = useState(); 
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedProduct = productList.find((product) => product.productId === parseInt(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productList, id]);  

  return (
    <div>
        <ProductSearchBar/>
        <Link className='blog-goBack' to='/productHome'>
        <div className='blog__back'><span> &#8592;</span> <span>Go Back</span></div>
      </Link>
      {product?(
                <div className='product_exterior'>
                <div className='productPage'>
                  <div className='productPage__container'>
                    <img className='productPage__image' src={product.image}/>
                    <div className='productPage__details'>
                        <div>
                            <h1>{product.name}</h1>
                            <p className='productPage__seller'>sold by <strong>TeaDepot</strong></p>
                        </div>
            
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                        <div class="productPage__quantity">
                            <p>Quantity:</p>
                            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                            <label>{quantity}</label>
                            <button onClick={() => setQuantity(quantity < product.stock ? quantity + 1 : quantity)}>+</button>
                            <p className='productPage__stock'>({product.stock} in stock)</p>
                        </div>
                        <button className='productPage__button'>Add to Cart</button>
                    </div>
                  </div>
                  </div>
                  <ProductReview/>
                </div>
      ):(<></>)}

    </div>
  )}
  

export default ProductPage
