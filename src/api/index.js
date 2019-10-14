import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const token = process.env.REACT_APP_GITHUB_TOKEN || '';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${token}`,
  },
});

const gqlQuery = ({ query, variables, context }) => client
  .query({
    query: gql(query),
    fetchPolicy: 'network-only',
    variables,
    context,
  })
  .then((result) => result.data);

export default gqlQuery;
