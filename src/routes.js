import React from 'react';
import { Route, IndexRoute } from 'react-router';
import New from './components/new';
import Listview from './components/listview';
import Show from './components/show';
import App from './components/app';
import Signin from './components/signin';
import Signup from './components/signup';
import requireAuth from './components/require-auth';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Listview} />
    <Route path="posts/new" component={requireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
  </Route>
);
