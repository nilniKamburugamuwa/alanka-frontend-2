import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from './Register';
import BlogHome from './BlogHome';
import Blog from './Blog';

function App() {
  return (
    //BEM
    <Router>
    <div className="app">
      <Switch>
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
