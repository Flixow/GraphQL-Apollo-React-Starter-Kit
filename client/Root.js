import React from 'react';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';

const Root = () => (
  <HashRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </HashRouter>
);

export default Root;
