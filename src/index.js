import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import { syncHistoryWithStore }  from 'react-router-redux';
import reducers from './reducers';
import App from './components/App';
import GraphExplorerContainer from './containers/GraphExplorerContainer';
import paramsToProps from './decorators/paramsToProps';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './index.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000' }),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers(client.reducer()),
  {},
  composeEnhancers(applyMiddleware(createLogger())),
);

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={paramsToProps(GraphExplorerContainer)}/>
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
