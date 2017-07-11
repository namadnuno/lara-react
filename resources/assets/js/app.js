
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Example,
    Home,
    Nav
}  from  './components/IndexComponents';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
      <div>
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/example" component={Example}/>
          </div>
      </div>
  </Router> 
, document.getElementById('root'));