import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
const client = new ApolloClient({
  uri: "https://hackernewsserver-production.up.railway.app/",
  cache: new InMemoryCache
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ ApolloProvider >
  </React.StrictMode>
);
