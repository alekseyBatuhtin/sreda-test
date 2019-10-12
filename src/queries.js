export const getLicenses = `
query Licenses {
  licenses {
    id
    name
  }
}
`;

export const searchRepositories = `
query SearchRepository($querySearch: String!) {
  search(query: $querySearch, type: REPOSITORY, first: 20) {
    repositoryCount
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ... on Repository {
        id
        name
        owner {
          login
        }
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        createdAt
        updatedAt
      }
    }
  }
}`;
