import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import tapPlugin from 'react-tap-event-plugin';

tapPlugin();

import Root from './Root';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const render = (Component) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppContainer>
        <Component />
      </AppContainer>
    </ApolloProvider>,
    document.getElementById('root')
  );
};

try {
  render(Root);

  if (module.hot) {
    module.hot.accept('./Root', () => {
      const NextApp = require('./Root').default;

      render(NextApp);
    });
  }
} catch (err) {
  console.log('Render error', err);
}
