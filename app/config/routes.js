import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Array from '../components/Questions/Array'
import Dashboard from '../components/Dashboard'
import Router from 'react-router';
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/array" component={Array} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);