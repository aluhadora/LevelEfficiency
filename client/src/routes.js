// src/routes.js
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import About from './components/about';
import EditUsers from './components/users/edit.js';
import Level from './components/efficientLevels/level.js'
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux'
import Dashboard from './components/dashboard/dashboard';
import Efficiency2 from './components/efficiency2/efficacy2';
import DropRateCalculator from './components/drop-rate-calculator/calculator';
import RunEntry from './components/run-entry/run-entry';

let store = createStore(todoApp)
console.log(store.getState())

const Routes = (props) => (
<Provider store={store}>
  <Router {...props}>
        {/* <Route path="/" component={Efficiency2} /> */}
        <Route path="/efficiency2" component={Efficiency2} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/edituser/:id" component={EditUsers} />
        <Route path="/level/:shortcode" component={Level} />
        <Route path="/calculator" component={DropRateCalculator} />
        <Route path="/calculator/:shortcode" component={DropRateCalculator} />
        <Route path="/runentry" component={RunEntry} />
  </Router>
</Provider>
);
 
export default Routes;