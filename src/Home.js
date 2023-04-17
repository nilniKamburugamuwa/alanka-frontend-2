import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import Header from './Header'
import "./Home.css"
import ListUser from './ListUser'
import Product from './Product'
import ProductList from './ProductList'
import ProductService from './ProductService'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { GetCurrentUser } from './GetCurrentUser'

function Home() {

    const [user, setUser] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          console.log(GetCurrentUser());
          const token = JSON.parse(localStorage.getItem('user'));
          console.log(token.token)
          const response = await axios.get('http://localhost:8082/api/v1/auth/user', {
            headers: {
              Authorization: `Bearer ${token.token}$`
            },
          });
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, []);

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      setShowPopup(true);
    }, []);

    const product = {
        id: 1234,
        name: "Batik Saree",
        price: 22.99,
        image: 'https://th.bing.com/th/id/OIP.cXCPK56d518EaUY7cMl-EgHaLH?pid=ImgDet&rs=1',
        rating: 5
    }

  return (
    <>
        <div>
      {user ? (
        <div>
      {showPopup && (
        <div className="popup">
          <p>Successfully logged in with email: <strong>{user.username}</strong> </p>
          <button onClick={() => setShowPopup(false)}>X</button>
        </div>
      )}
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
        <Header/>
    <div className='home'>

        <div className='home__container'>
            
            <img className='home__image' src='https://todaytea.com/images/banner-products.jpg'/>
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
