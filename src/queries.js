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
query SearchRepository($querySearch: String!, $after: String, $before: String, $first: Int, $last: Int) {
  search(query: $querySearch, type: REPOSITORY, before: $before, after: $after, first: $first, last: $last) {
    pageInfo {
      startCursor
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
