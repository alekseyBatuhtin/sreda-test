import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const token = 'af836c16d0dbeddfc46f681a7878bad793fb44fb';

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
