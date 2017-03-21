import React from 'react'
import { Route } from 'react-router-dom';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

export default (
  <div>
    <Route exact path="/" component={App}>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </Route>
  </div>
);
