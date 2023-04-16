import React, { Component, useEffect, useState } from 'react'
import './ShopPage.css'
import ProductList from './ProductList';
import ProductService from './ProductService';
import Header from './Header';
const ShopPage =()=> {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    ProductService.getAllProducts().then((response) =>{
      setProducts(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[]) 

    return (
      <div className='shopPage'>
        <Header/>
        <div className='shopPage__header'>
            <img className='shop__image' src='https://th.bing.com/th/id/R.24da408ee203a0e6ea9abd6aa6fde623?rik=balpnJFzwz8Aww&pid=ImgRaw&r=0'/>
            <p>Welcome to</p>
            <h1>SL Mask Hub</h1>
        </div>
        <div className='shopPage__search'>
            <input className='search__input' placeholder='Search product in shop'></input>
            <button className='search__button'>Search</button>
        </div>
        <div>
          <ProductList products={products}/>
        </div>
      </div>
    )

}

export default ShopPage
