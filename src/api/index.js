import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const token = process.env.REACT_APP_GITHUB_TOKEN || '';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${token}`,
  },
});


const client = new ApolloClient({
  cache,
  link,
  resolvers: {},
});

export default client;
