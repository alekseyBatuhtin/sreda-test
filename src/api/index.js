import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const token = 'd1700cdad7ab8044a0e2cb2df853d1b30dbb03bd';

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
