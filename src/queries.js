import gql from 'graphql-tag';

export const getLicenses = gql`
query Licenses {
  licenses {
    id
    name
    key
  }
}
`;

export const searchRepositories = gql`
query SearchRepository($querySearch: String!, $after: String, $before: String, $first: Int, $last: Int) {
  search(query: $querySearch, type: REPOSITORY, before: $before, after: $after, first: $first, last: $last) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ... on Repository @client {
        id
        name
        description
        url
        owner {
          login
        }
        licenseInfo {
          name
        }
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        createdAt
      }
    }
  }
}`;
