import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
      </Switch>
    </div>
  )
};

export default App;
