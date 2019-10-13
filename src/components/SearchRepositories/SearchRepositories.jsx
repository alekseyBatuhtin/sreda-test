import React, { useReducer, useEffect } from 'react';
import { Box } from '@chakra-ui/core';
import Search from '../Search';
import RepositoriesList from '../RepositoriesList';

import gqlQuery from '../../api';
import { getLicenses, searchRepositories } from '../../queries';

const initialState = {
  query: '',
  licenseType: '',
  licenses: [],
  repositories: [],
  fetchRepositories: false,
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
        repositories: action.payload,
        fetchRepositories: false,
      };
    default:
      return state;
  }
};

export const genMonthAgoDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = `${date.getUTCMonth() + 1 - 1}`.padStart(2, 0);
  const day = `${date.getUTCDate()}`.padStart(2, 0);

  return `${year}-${month}-${day}`;
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
        querySearch: `${state.query} ${state.licenseType ? `license:${state.licenseType}` : ''} created:>${genMonthAgoDate()} language:JavaScript sort:stars `,
      },
    })
      .then((response) => {
        dispatch({
          type: 'FETCH_REPOSITORIES_SUCCESS',
          payload: response.search.nodes,
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
      {/* <Pagination /> */}
    </Box>
  );
}

export default SearchRepositories;
