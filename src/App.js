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

function App() {

  useEffect(() => {
    //only runs once when app component loads
    
  }, [])

  return (
    //BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path='/adminDashboard'>
          <AdminDashboard/>
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
          <Header/>
          <Home/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
