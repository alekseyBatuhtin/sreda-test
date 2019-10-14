import React, { useReducer, useEffect } from 'react';
import { Box } from '@chakra-ui/core';
import Search from '../Search';
import RepositoriesList from '../RepositoriesList';
import Pagination from '../Pagination';

import gqlQuery from '../../api';
import { getLicenses, searchRepositories } from '../../queries';
import { genSearchQuery } from '../../utils';

const initialState = {
  query: '',
  licenseType: '',
  licenses: [],
  repositories: [],
  fetchRepositories: false,
  pagination: {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE_QUERY':
      return { ...state, query: action.payload };
    case 'HANDLE_CHANGE_LICENSE_TYPE':
      return { ...state, licenseType: action.payload };
    case 'FETCH_LICENSES_SUCCESS':
      return { ...state, licenses: action.payload };
    case 'FETCH_REPOSITORIES':
      return { ...state, fetchRepositories: true };
    case 'FETCH_REPOSITORIES_SUCCESS':
      return {
        ...state,
        repositories: action.payload.repositories,
        pagination: action.payload.pagination,
        fetchRepositories: false,
      };
    default:
      return state;
  }
};

function SearchRepositories() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    gqlQuery({ query: getLicenses })
      .then((response) => {
        dispatch({
          type: 'FETCH_LICENSES_SUCCESS',
          payload: response.licenses,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChangeQuery = (event) => dispatch({ type: 'HANDLE_CHANGE_QUERY', payload: event.target.value });
  const handleChangeLicenseType = (event) => dispatch({
    type: 'HANDLE_CHANGE_LICENSE_TYPE',
    payload: event.target.value,
  });
  const handleSearch = () => {
    dispatch({ type: 'FETCH_REPOSITORIES' });
    gqlQuery({
      query: searchRepositories,
      variables: {
        querySearch: genSearchQuery(state.query, state.licenseType),
        first: 20,
      },
    })
      .then((response) => {
        dispatch({
          type: 'FETCH_REPOSITORIES_SUCCESS',
          payload: {
            repositories: response.search.nodes,
            pagination: response.search.pageInfo,
          },
        });
      })
      .catch((err) => console.error(err));
  };

  const handleChangePage = (direction) => () => {
    dispatch({ type: 'FETCH_REPOSITORIES' });
    gqlQuery({
      query: searchRepositories,
      variables: {
        querySearch: genSearchQuery(state.query, state.licenseType),
        after: direction === 'next' ? state.pagination.endCursor : null,
        first: direction === 'next' ? 20 : null,
        before: direction === 'prev' ? state.pagination.startCursor : null,
        last: direction === 'prev' ? 20 : null,
      },
    })
      .then((response) => {
        dispatch({
          type: 'FETCH_REPOSITORIES_SUCCESS',
          payload: {
            repositories: response.search.nodes,
            pagination: response.search.pageInfo,
          },
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Search
        query={state.query}
        handleChangeQuery={handleChangeQuery}
        licenses={state.licenses}
        licenseType={state.licenseType}
        handleChangeLicenseType={handleChangeLicenseType}
        handleSearch={handleSearch}
      />
      <RepositoriesList fetch={state.fetchRepositories} repositories={state.repositories} />
      <Pagination
        hasPreviousPage={state.pagination.hasPreviousPage}
        hasNextPage={state.pagination.hasNextPage}
        handleChangePage={handleChangePage}
      />
    </Box>
  );
}

export default SearchRepositories;
