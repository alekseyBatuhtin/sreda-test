export const getLicenses = `
query Licenses {
  licenses {
    id
    name
    key
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
