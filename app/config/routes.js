import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Array from '../components/Questions/Array'
import Router from 'react-router';
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/array" component={Array} />
  </Route>
);