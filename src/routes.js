import React from 'react';
import { Route, IndexRoute } from 'react-router';
import New from './components/new';
import Listview from './components/listview';
import Show from './components/show';
import App from './components/app';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Listview} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
