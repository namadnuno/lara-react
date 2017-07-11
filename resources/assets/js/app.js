
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
    Home
}  from  './components/IndexComponents';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
      <div>
         <Route exact path="/" component={Example} />
         <Route path="/home" component={Home}/>
      </div>
  </Router> 
, document.getElementById('root'));