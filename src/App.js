import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from './Register';
import BlogHome from './BlogHome';
import Blog from './Blog';
import AdminDashboard from './AdminDashboard';
import ProductHome from './ProductHome';
import UserPage from './UserPage';
import { AdminPage } from './AdminPage';
import ProductPage from './ProductPage';
import Home2 from './Home2';
import SellerDashboard from './SellerDashboard';
import ShopPage from './ShopPage';
import Crud from './crud';
import SellerForm from './SellerForm';
import AddProduct from './AddProduct';
import SellerProfile from './SellerProfile';
import RegisterSeller from './RegisterSeller';
import RegisterBuyer from './RegisterBuyer';
import Login2 from './Login2';

function App() {

  useEffect(() => {
    //only runs once when app component loads
    
  }, [])

  return (
    //BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path='/home2'>
          <Home2/>
        </Route>
        <Route path='/login2'>
          <Login2/>
        </Route>
        <Route path='/RegisterSeller'>
          <RegisterSeller/>
        </Route>
        <Route path='/RegisterBuyer'>
          <RegisterBuyer/>
        </Route>
        <Route path='/sellerProfile'>
          <SellerProfile/>
        </Route>
        <Route path='/addProduct'>
          <AddProduct/>
        </Route>
        <Route path='/sellerForm'>
          <SellerForm/>
        </Route>
        <Route path='/sellerDashboard'>
          <SellerDashboard/>
        </Route>
        <Route path='/shopPage'>
          <ShopPage/>
        </Route>
      <Route path='/productPage'>
          <ProductPage/>
        </Route>
        <Route path='/adminPage'>
          <AdminPage/>
        </Route>
        <Route path='/userPage'>
          <UserPage/>
        </Route>
        <Route path='/adminDashboard'>
          <AdminDashboard/>
        </Route>
        <Route path='/productHome/:id'>
          <ProductHome/>
        </Route>
        <Route path='/productHome'>
          <ProductHome/>
        </Route>
        <Route path='/blogHome'>
          <BlogHome/>
        </Route>
        <Route path='/blog/:id'>
          <Blog/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/checkout'>
          <Header/>
          <Checkout/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
