import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import Header from './Header'
import "./Home.css"
import ListUser from './ListUser'
import Product from './Product'
import ProductList from './ProductList'
import ProductService from './ProductService'
import { useHistory } from 'react-router-dom'
import { GetCurrentUser } from './GetCurrentUser'

function Home2() {


/*     const handleSignUp=(e)=>{
        console.log(GetCurrentUser())
        e.preventDefault();

        const userName = {userNames: username};

        fetch(apiLink+"/saveUserName", {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${GetCurrentUser().token}`}, body: JSON.stringify(userName)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                console.log("User Name is added.");
                history("/userPage");
            }
            else{
                console.log("Error:",data.message);
            }
        })
        .catch(error=>{
            console.error("Error:", error);
        });
     } */
    

    const product = {
        id: 1234,
        name: "Batik Saree",
        price: 22.99,
        image: 'https://th.bing.com/th/id/OIP.cXCPK56d518EaUY7cMl-EgHaLH?pid=ImgDet&rs=1',
        rating: 5
    }

    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            history.push('/login')
        }
    },[])

    const [user, setUser] = useState();
    useEffect(()=>{
        fetch("http://localhost:8082/api/v1/auth/").then(x=>x.json().then(y=>{
            setUser(y.user);
        }))
    })
  return (
    <>
        <Header/>
    <div className='home'>

        <div className='home__container'>
            <h1>{user}</h1>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg'/>
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

export default Home2
