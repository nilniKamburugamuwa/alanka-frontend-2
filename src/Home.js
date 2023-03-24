import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import Header from './Header'
import "./Home.css"
import ListUser from './ListUser'
import Product from './Product'
import ProductList from './ProductList'
import ProductService from './ProductService'

function Home() {

    const product = {
        id: 1234,
        name: "Batik Saree",
        price: 22.99,
        image: 'https://th.bing.com/th/id/OIP.cXCPK56d518EaUY7cMl-EgHaLH?pid=ImgDet&rs=1',
        rating: 5
    }

  return (
    <>
        <Header/>
    <div className='home'>

        <div className='home__container'>
            
            <img className='home__image' src='https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg'/>
            <CategoryList/>
            <div className="home__row">
                <Product product={product}/>
                <Product product={product}/>
            </div>

            <div className="home__row">
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
            </div>

            <div className="home__row">
                <Product product={product}/>
            </div> 
        </div>
    </div>
    </>
  )
}

export default Home
