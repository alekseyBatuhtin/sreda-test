import React, { useReducer, useEffect } from 'react';
import { Box } from '@chakra-ui/core';
import Search from '../Search';
import gqlQuery from '../../api';

import { getLicenses } from '../../queries';

const initialState = {
  query: '',
  licenseType: '',
  licenses: [],
  repositories: [],
  fetchRepositories: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE_QUERY':
      return { ...state, query: action.payload };
    case 'HANDLE_CHANGE_LICENSE_TYPE':
      return { ...state, licenseType: action.payload };
    case 'FETCH_LICENSES_SUCCESS':
      return { ...state, licenses: action.payload };
    default:
      return state;
  }
};

function SearchRepositories() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    gqlQuery({ query: getLicenses }).then((response) => {
      dispatch({ type: 'FETCH_LICENSES_SUCCESS', payload: response.licenses });
    }).catch((err) => console.error(err));
  }, []);

  const handleChangeQuery = (event) => dispatch({ type: 'HANDLE_CHANGE_QUERY', payload: event.target.value });
  const handleChangeLicenseType = (event) => dispatch({ type: 'HANDLE_CHANGE_LICENSE_TYPE', payload: event.target.value });

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Search
        query={state.query}
        handleChangeQuery={handleChangeQuery}
        licenses={state.licenses}
        licenseType={state.licenseType}
        handleChangeLicenseType={handleChangeLicenseType}
      />
      {/* <RepositoriesList />
      <Pagination /> */}
    </Box>
  );
}


export default SearchRepositories;
