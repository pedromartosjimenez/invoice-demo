import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/user/Register';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Register />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);